const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const connectDB = require("./conn");
const http = require("http");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const socketio = require("socket.io");

const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:4000"];

const io = socketio(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

connectDB();

const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

const cloudinary = require("./cloudinary");
cloudinary.cloudinaryConnect();

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

const authRouter = require("./routers/authRouters");
const userRouter = require("./routers/userRouters");
const companyRouter = require("./routers/companyRouters");
const jobRouter = require("./routers/jobRouters");
const chatRouter = require("./routers/chatRouters");
const adminRouter = require("./routers/adminRouters");
const allRouter = require("./routers/Routers");

const errorControllers = require("./controllers/errorControllers");
const Message = require("./models/Message");

app.use(express.json());

app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/jobseeker/", userRouter);
app.use("/api/v1/recruiter/", companyRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/admin/", adminRouter);
app.use("/api/v1/all", allRouter);

app.get("/", (req, res) => {
  console.log("Hello this is findintern-backend");
  res.send("Hello this is findintern-backend");
});

app.use(errorControllers);




// Socket.IO
io.on("connection", (socket) => {
  console.log(`New ${socket.id} connected`);

  socket.on("join", ({ roomId }) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  socket.on("sendMessage", async (data) => {
    const { sender, receiver, message, role } = data;
    const senderObj = {
      id: sender,
      type: role === "jobseeker" ? "User" : "Company",
    };
    const receiverObj = {
      id: receiver,
      type: role === "jobseeker" ? "Company" : "User",
    };
    const newMessage = new Message({
      sender: senderObj,
      receiver: receiverObj,
      message,
    });
    await newMessage.save();

    const roomId = [sender, receiver].sort().join("_");
    io.to(roomId).emit("receiveMessage", newMessage);
  });

  socket.on("leave", ({ roomId }) => {
    socket.leave(roomId);
    console.log(`User left room: ${roomId}`);
  });

  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
});

server.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
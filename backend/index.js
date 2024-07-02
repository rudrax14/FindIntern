require("dotenv").config({ path: "./.env" });
const express = require("express");
const connectDB = require("./conn");
const http = require("http");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cloudinary = require("./cloudinary");
const errorControllers = require("./controllers/errorControllers");
const Message = require("./models/Message");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Connect to the database
connectDB();

// Middleware setup
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

// Connect to Cloudinary
cloudinary.cloudinaryConnect();

// Routers
const authRouter = require("./routers/authRouters");
const userRouter = require("./routers/userRouters");
const companyRouter = require("./routers/companyRouters");
const jobRouter = require("./routers/jobRouters");
const chatRouter = require("./routers/chatRouters");
const adminRouter = require("./routers/adminRouters");
const allRouter = require("./routers/Routers");

// Use Routers
app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/jobseeker/", userRouter);
app.use("/api/v1/recruiter/", companyRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/admin/", adminRouter);
app.use("/api/v1/all", allRouter);

// Error handling middleware
app.use(errorControllers);

app.get("/", (req, res) => {
  console.log("Hello this is findintern-backend");
  res.send("Hello this is findintern-backend");
});

server.listen(5000, () => {
  console.log("Listening on port 5000");
});

// Socket.io connection handling
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("join", ({ currentUserId, userType }) => {
    socket.join(`${userType}:${currentUserId}`);
    console.log(`User joined: ${userType}:${currentUserId}`);
  });

  socket.on("sendMessage", async (data) => {
    const { sender, receiver, message, role } = data;
    console.log(message);
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

    io.to(`${receiverObj.type}:${receiverObj.id}`).emit(
      "receiveMessage",
      newMessage
    );
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

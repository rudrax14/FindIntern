const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const connectDB = require("./conn");
const http = require("http");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
    credentials: true,
  },
});
connectDB();
// file upload methord // server pe upload karna hai
const fileUpload = require("express-fileupload");
// app.use(fileUpload());
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
    origin: process.env.FRONTEND_URL,
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
// const setupSocket = require('./utils/setupSocket');

app.use(express.json());

app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/jobseeker/", userRouter);
app.use("/api/v1/recruiter/", companyRouter);
app.use("/api/v1/job", jobRouter);
//companyRouter.use('/:companyId', jobRouter);
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/admin/", adminRouter);
app.use("/api/v1/all", allRouter);

//  app.use("/api/v1/jobseeker/company/:companyId/job/:jobId", userRouter, companyRouter, jobRouter);

app.use(errorControllers);

server.listen(5000, () => {
  console.log("Listening");
});

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

    io.to(`${receiver.type}:${receiver.id}`).emit("receiveMessage", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

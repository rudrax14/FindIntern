// socket.js
const socketIo = require("socket.io");
const Message = require("../models/Message");

const setupSocket = (server) => {
  const io = socketIo(server);

  io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("join", ({ id, type }) => {
      socket.join(`${type}:${id}`);
      console.log(`User joined: ${type}:${id}`);
    });

    socket.on("sendMessage", async (data) => {
      const { sender, receiver, message, role } = data;
      const newMessage = new Message({ sender, receiver, message });
      await newMessage.save();

      io.to(`${receiver.type}:${receiver.id}`).emit(
        "receiveMessage",
        newMessage
      );
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  return io;
};

module.exports = setupSocket;

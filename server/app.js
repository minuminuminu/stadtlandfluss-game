const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`${socket.id} just joined!`);

  socket.on("data", (data) => {
    io.emit("data", data);
  });

  socket.on("disconnect", () => {
    socket.removeAllListeners();
    console.log(socket.id + " disconnected.");
  });
});

httpServer.listen(3001);

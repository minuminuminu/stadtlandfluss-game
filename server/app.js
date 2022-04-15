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
    socket.join(data.roomNumber);
    io.to(data.roomNumber).emit(
      "joinedRoom",
      `${data.username} has just joined the room ${data.roomNumber}`
    );
  });

  socket.on("change", (args) => {
    let dummyArr = [...args];
    dummyArr.push("ledrool");

    io.emit("changeContent", dummyArr);
  });

  socket.on("disconnect", () => {
    socket.removeAllListeners();
    console.log(socket.id + " disconnected.");
  });
});

httpServer.listen(3001, () => console.log("listening on port 3001"));

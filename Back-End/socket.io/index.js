const socket = require("socket.io");

const io = socket();

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    io.emit("LogIn-Notification", "someone is out");
  });
});

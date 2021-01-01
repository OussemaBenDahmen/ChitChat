const socket = require("socket.io");
const RoomConversationModel = require("../models/roomConversation");
const ConversationModel = require("../models/Conversation");
const UserController = require("../controllers/userController");
const RoomModel = require("../models/roomModel");
const RoomConversationController = require("../controllers/roomConversationController");
const ConversationController = require("../controllers/conversationController");
const MsgModel = require("../models/msgModel");

module.exports = function (Server) {
  io = socket(Server, {
    cors: { origin: "http://localhost:3000", credentials: true },
  });
  io.on("connection", (socket) => {
    socket.on("LogIn", (data) => {
      if (data.log != {}) {
        io.emit("Log-notification", {
          msg: `${data.log.UserName} has connected`,
        });
      }
    });

    socket.on("SendMessage", (data) => {
      if (data.destination == "room") {
        let newMsg = new MsgModel(data.Message);
        newMsg.save().then((Msg) => {
          RoomConversationModel.findByIdAndUpdate(
            { _id: data.Conversation._id },
            { $push: { Messages: Msg } },
            { new: true }
          )
            .populate({ path: "Messages", populate: { path: "SenderId" } })
            .then((Conversation) => {
              io.emit("MessageUpdate", Conversation);
            });
        });
      } else {
        let newMsg = new MsgModel(data.Message);
        newMsg.save().then((Msg) => {
          ConversationModel.findByIdAndUpdate(
            { _id: data.Conversation._id },
            { $push: { Messages: Msg } },
            { new: true }
          )
            .populate({ path: "Messages", populate: { path: "SenderId" } })
            .then((Conversation) => {
              io.emit("MessageUpdate", Conversation);
            });
        });
      }
    });

    socket.on("disconnect", (socket) => {
      io.emit("Log-notification", { msg: "Someone disconnected" });
    });
  });
};

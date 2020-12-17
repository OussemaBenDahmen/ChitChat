const mongoose = require("mongoose");
const objectId = require("mongoose").Schema.Types.ObjectId;
const ConversationSchema = new mongoose.Schema({
  Room: { type: objectId, ref: "Rooms" },
  Messages: {
    type: [(msg = { type: objectId, ref: "Msgs" })],
    default: [],
  },
});

const RoomConversationModel = mongoose.model(
  "RoomConversation",
  ConversationSchema
);

module.exports = RoomConversationModel;

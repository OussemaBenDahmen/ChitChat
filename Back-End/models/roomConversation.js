const mongoose = require("mongoose");
const objectId = require("mongoose").Schema.Types.ObjectId;
const ConversationSchema = new mongoose.Schema({
  Room: { type: objectId, ref: "Groupes" },
  Messages: [(msg = { type: objectId, ref: "Msgs" })],
});

const RoomConversationModel = mongoose.model(
  "RoomConversation",
  ConversationSchema
);

module.exports = ConversationModel;

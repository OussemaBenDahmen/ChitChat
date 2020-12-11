const mongoose = require("mongoose");
const objectId = require("mongoose").Schema.Types.ObjectId;
const ConversationSchema = new mongoose.Schema({
  Users: { type: [(user = { type: objectId, ref: "Users" })], unique },
  Messages: [(msg = { type: objectId, ref: "Msgs" })],
});

const ConversationModel = mongoose.model("Conversation", ConversationSchema);

module.exports = ConversationModel;
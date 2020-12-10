const mongoose = require("mongoose");
const objectId = require("mongoose").Schema.Types.ObjectId;
const ConversationSchema = new mongoose.Schema({
  Groupe: { type: objectId, ref: "Groupes" },
  Messages: [(msg = { type: objectId, ref: "Msgs" })],
});

const ConversationModel = mongoose.model("Conversation", ConversationSchema);

module.exports = ConversationModel;

const mongoose = require("mongoose");
const ObjectId = require("mongoose").Schema.Types.ObjectId;
const MsgSchema = new mongoose.Schema({
  Value: { type: String, required },
  SenderId: {
    type: ObjectId,
    ref: "Users",
  },
  RecieverId: {
    type: ObjectId,
    ref: "Users",
  },
  Status: { type: String, default: "Pending" },
  Date: { type: Date, default: Date.now },
});

const MsgModel = mongoose.model("Msgs", MsgSchema);

module.exports = MsgModel;

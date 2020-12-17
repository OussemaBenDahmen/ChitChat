const mongoose = require("mongoose");
const ObjectId = require("mongoose").Schema.Types.ObjectId;
const MsgSchema = new mongoose.Schema({
  Value: { type: String, required: true },
  SenderId: {
    type: ObjectId,
    ref: "Users",
  },
  MsgType: { type: String, required: true },
  Date: { type: Date, default: Date.now },
});

const MsgModel = mongoose.model("Msgs", MsgSchema);

module.exports = MsgModel;

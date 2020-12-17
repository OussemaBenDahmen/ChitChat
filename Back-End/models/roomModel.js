const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;
const RoomSchema = new mongoose.Schema({
  RoomName: { type: String, required: true, unique: true },
  UsersList: [(user = { type: objectId, ref: "Users" })],
  RoomCreator: {
    type: objectId,
    ref: "Users",
  },
});

const RoomModel = mongoose.model("Rooms", RoomSchema);

module.exports = RoomModel;

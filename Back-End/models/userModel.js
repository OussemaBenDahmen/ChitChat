const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;
const UserSchema = new mongoose.Schema({
  UserName: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  picture: { type: String, default: "imgPlaceholder.jpg" },
  Status: {
    type: String,
    default: "Offline",
  },
});

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;

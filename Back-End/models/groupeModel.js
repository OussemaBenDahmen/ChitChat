const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;
const GroupeSchema = new mongoose.Schema({
  GroupeName: { type: String, required, unique },
  UsersList: [(user = { type: objectId, ref: "Users" })],
  GroupeCreator: {
    type: objectId,
    ref: "Users",
  },
});

const GroupeModel = mongoose.model("Groupes", GroupeSchema);

module.exports = GroupeModel;

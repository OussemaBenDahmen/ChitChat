const { populate } = require("../models/roomConversation");
const RoomConversationModel = require("../models/roomConversation");

module.exports = {
  GetConversation: (req, res) => {
    RoomConversationModel.find({ Room: req.params.id })
      .populate({
        path: "Messages",
        populate: { path: "SenderId" },
      })
      .then((Rooms) => {
        console.log(Rooms[0]);
        res.json(Rooms[0]);
      })
      .catch((err) => console.log(err));
  },
};

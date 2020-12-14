const RoomConversationModel = require("../models/roomConversation");
const RoomModel = require("../models/roomModel");

module.exports = {
  Create: (req, res) => {
    const newRoom = new RoomModel(req.body);

    newRoom.save().then((Room) => {
      RoomModel.findById({ _id: Room._id })
        .populate("RoomCreator")
        .then((data) => {
          const newRoomConversation = RoomConversationModel({
            Room: data,
          });
          newRoomConversation.save();
          res.json(data);
        })
        .catch((err) => res.status(500).send("Can't create room try again"));
    });
  },
  Edit: (req, res) => {
    RoomModel.findByIdAndUpdate(
      { _id: req.params.id },

      { $set: req.body },
      { new: true }
    ).then((data) =>
      RoomModel.findById({ _id: data._id })
        .populate("RoomCreator UsersList")
        .then((data) => {
          console.log(data);
          res.json(data);
        })
    );
  },
  LeaveRoom: (req, res) => {
    RoomModel.findById({ _id: req.params.id })
      .populate("UsersList")
      .then((room) => {
        let newUsersList = room.UsersList.filter(
          (el) => el._id != req.body._id
        );
        RoomModel.findByIdAndUpdate(
          { _id: req.params.id },
          { $set: { UsersList: newUsersList } },
          { new: true }
        )
          .populate("RoomCreator UsersList")
          .then((data) => {
            console.log(data);
            res.status(200).json(data);
          });
      })
      .catch(() => res.status(500).send("Some error has occured"));
  },
  Delete: (req, res) => {
    RoomModel.findByIdAndDelete({ _id: req.params.id }).then((data) => {
      res.json(data);
    });
  },
  GetAll: (req, res) => {
    RoomModel.find({
      $or: [{ RoomCreator: req.body._id }, { UsersList: req.body._id }],
    })
      .populate("RoomCreator UsersList")
      .then((data) => res.json(data))
      .catch(() => res.status(500).send("Some problem has occured"));
  },
  GetOne: (req, res) => {
    RoomModel.findOne({ _id: req.params.id })
      .populate("UsersList")
      .then((data) => res.json(data))
      .catch(() => res.status(500).send("Something went wrong try again"));
  },
};

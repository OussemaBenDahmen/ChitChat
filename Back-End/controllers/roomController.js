const RoomModel = require("../models/roomModel");

module.exports = {
  Create: (req, res) => {
    const newRoom = new RoomModel(req.body);

    newRoom.save().then((data) => {
      RoomModel.findById({ _id: data._id })
        .populate("RoomCreator")
        .then((data) => {
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

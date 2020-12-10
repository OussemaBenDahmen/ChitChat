const UserModel = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const PassHash = require("../helpers/PasswordHasher");
module.exports = {
  get: (req, res) => {
    UserModel.findOne({ _id: req.params.id }, (err, data) => res.json(data));
  },
  getAll: (req, res) => {
    UserModel.find({}, (err, data) => {
      if (err) throw err;
      let newData = data.filter((el) => el._id != req.body._id);
      res.status(200).json(newData);
    });
  },
  create: (req, res) => {
    const Profile = { ...req.body };
    Profile.UserName = Profile.UserName.toLowerCase();
    PassHash.hashPass(Profile.Password).then((hash) => {
      Profile.Password = hash;
      let newUser = new UserModel(Profile);
      newUser
        .save()
        .then(() => {
          const token = jwt.sign({ ...newUser }, process.env.SECRET_KEY);
          res.cookie("token", token, { httpOnly: "true" });
          res.json(newUser);
        })
        .catch((error) => {
          console.log(error.message);
          res.status(500).send(error.message.substring(0, 6));
        })
        .catch((err) => res.status(500).send("something is wrong"));
    });
  },
  edit: (req, res) => {
    let updateProfile = req.body;
    updateProfile.UserName = req.body.UserName.toLowerCase();
    console.log(updateProfile);
    UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: updateProfile },
      { new: true },
      (err, data) => {
        if (err) console.log(err);
        res.json(data);
      }
    );
  },
  delete: (req, res) => {
    UserModel.findByIdAndDelete({ _id: req.params.id }).then((data) =>
      res.json(data).catch((err) => res.json(err))
    );
  },
  getLogged: (req, res) => {
    let mytoken = req.cookies.token;
    console.log(mytoken);
    let decoded = jwt.verify(mytoken, process.env.SECRET_KEY);

    UserModel.findById({ _id: decoded._id }).then((data) => {
      res.send(data);
      console.log(data);
    });
  },
};

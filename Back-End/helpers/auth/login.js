const UserModel = require("../../Models/userModel");
const jwt = require("jsonwebtoken");
const PassHash = require("../PasswordHasher");

module.exports = Authentication = {
  LogIn: (req, res) => {
    UserModel.find({
      UserName: req.body.UserName.toLowerCase(),
    }).then(async (data) => {
      if (data.length === 0) {
        res.status(500).send("User not found in dataBase");
        console.log("notfound");
      } else {
        console.log(data);
        const match = await PassHash.comparePass(
          req.body.Password,
          data[0].Password
        );
        if (match) {
          const mydata = { ...data[0]._doc }; //getting user's info from the token
          UserModel.findByIdAndUpdate(
            { _id: mydata._id },
            { $set: { Status: "Online" } },
            { new: true },
            (err, data) => {
              if (err) res.status(500).send("User not found in dataBase");
              const token = jwt.sign(mydata, process.env.SECRET_KEY);
              res.cookie("token", token, { httpOnly: "true" });
              res.json(data);
            }
          );
        } else {
          res.status(500).send("Invalid Password");
        }
      }
    });
  },
  LogOut: (req, res) => {
    console.log(req.body);
    UserModel.findByIdAndUpdate(
      { _id: req.body._id },
      { $set: { Status: "Offline" } },
      { new: true },
      (err, data) => {
        if (err) console.log(err);
        res.cookie("token", "", { maxAge: 0, httpOnly: true }).send("done");
      }
    );
  },
};

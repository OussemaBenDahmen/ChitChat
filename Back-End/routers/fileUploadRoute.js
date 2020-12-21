const express = require("express");
const router = express.Router();
const Upload = require("../helpers/file-upload");
const userController = require("../controllers/userController");

router.post(
  "/ProfilePic/user_id=:id",
  Upload.single("Picture"),
  userController.profilePicEdit
);

router.post("/file", Upload.single("MsgFile"), (req, res) => {
  res.json({ msg: "done" });
});

module.exports = router;

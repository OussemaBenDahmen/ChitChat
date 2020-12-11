const express = require("express");
const router = express.Router();
const Upload = require("../helpers/file-upload");
const userController = require("../controllers/userController");

router.post(
  "/ProfilePic/user_id=:id",
  Upload.single("Picture"),
  userController.profilePicEdit
);

module.exports = router;

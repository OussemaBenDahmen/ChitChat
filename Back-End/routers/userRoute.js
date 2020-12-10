const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/signup", userController.create);

router.get("/get/:id", userController.get);

router.post("/FriendsList", userController.getAll);

router.get("/getLogged", userController.getLogged);

router.put("/user_id=:id", userController.edit);

module.exports = router;

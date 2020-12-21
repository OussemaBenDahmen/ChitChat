const express = require("express");
const conversationController = require("../controllers/conversationController");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/signup", userController.create);

router.post("/Conversation_id=:id", conversationController.GetConversation);

router.post("/FriendsList", userController.getAll);

router.get("/getLogged", userController.getLogged);

router.put("/user_id=:id", userController.edit);

router.put("/status/user_id=:id", userController.StatusUpdate);

router.delete("/user_id=:id", userController.delete);

module.exports = router;

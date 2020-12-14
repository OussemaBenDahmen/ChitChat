const express = require("express");
const roomController = require("../controllers/roomController");
const roomConversationController = require("../controllers/roomConversationController");
const router = express.Router();

router.post("/GetAll", roomController.GetAll);

router.get("/Room_id=:id", roomController.GetOne);

router.get("/Conversation_id=:id", roomConversationController.GetConversation);

router.post("/Create", roomController.Create);

router.put("/Room_id=:id", roomController.Edit);

router.put("/Leave/Room_id=:id", roomController.LeaveRoom);

router.delete("/Room_id=:id", roomController.Delete);

module.exports = router;

const express = require("express");
const roomController = require("../controllers/roomController");
const router = express.Router();

router.post("/GetAll", roomController.GetAll);

router.get("/Room_id=:id", roomController.GetOne);

router.post("/Create", roomController.Create);

router.put("/Room_id=:id", roomController.Edit);

router.delete("/Room_id=:id", roomController.Delete);

module.exports = router;

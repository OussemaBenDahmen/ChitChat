const MsgModel = require("../models/msgModel");

module.exports = {
  sendMsg: (req, cb) => {
    const newMsg = new MsgModel(req);
    newMsg.save().then((data) => {
      cb(data);
    });
  },
};

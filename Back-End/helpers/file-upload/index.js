const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const Upload = multer({
  storage: storage,
  limits: { fileSize: 41943040 },
});

module.exports = Upload;

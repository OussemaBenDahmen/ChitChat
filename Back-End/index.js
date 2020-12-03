const express = require("express");
const cors = require("cors");
const CookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
app.listen(process.env.PORT || 5000, () =>
  console.log(`Server Running on : http://localhost:${process.env.PORT}`)
);

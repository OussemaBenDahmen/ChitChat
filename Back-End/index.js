const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const os = require("os");
const userController = require("./controllers/userController");
const Authentication = require("./helpers/auth/login");
const userRoute = require("./routers/userRoute");
require("dotenv").config();
const app = express();

//Setting up the server
app.use(cookieParser());
app.use(express.json());
app.use(express.static("Public"));
const myIpAdress = os.networkInterfaces()["Wi-Fi"][1].address; //getting the PC's or Phone's Ip address
let AllowedDomains = ["localhost", `${myIpAdress}`];
const whitelist = AllowedDomains.map((domain) => `http://${domain}:3000`);

app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

//Connection to DB
mongoose.connect(
  process.env.MongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log("Connected to the DataBase");
  }
);

//Application middlewares
app.post("/connect/login", Authentication.LogIn);
app.post("/connect/logout", Authentication.LogOut);
app.use("/users", userRoute);

app.listen(process.env.PORT || 5000, ["*", ...AllowedDomains], () =>
  console.log(`Server Running on : http://localhost:${process.env.PORT}`)
);

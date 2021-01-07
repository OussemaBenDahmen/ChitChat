const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Authentication = require("./helpers/auth/login");
const userRoute = require("./routers/userRoute");
const UploadRoute = require("./routers/fileUploadRoute");
const roomRoutes = require("./routers/roomRoutes");
const Socket = require("./socket.io");

require("dotenv").config();
const app = express();

//Setting up the server
app.use(cookieParser());
app.use(express.json());
app.use(express.static("Public"));

app.use(
  cors({
    origin: "http://localhost:3000",
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
app.use("/Upload", UploadRoute);
app.use("/Rooms", roomRoutes);

/**************************/
const server = app.listen(process.env.PORT || 5000, ["*"], () =>
  console.log(`Server Running on : http://localhost:${process.env.PORT}`)
);

const io = Socket(server);

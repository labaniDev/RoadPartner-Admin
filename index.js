const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const route = require("./routes/router.js");
const cookieParser = require("cookie-parser");
const multer=require("multer");
require("dotenv").config();
const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication.js");

const app = express();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error));



//mongodb connection
// mongoose.connect(process.env.HOST)
// .then(e=>console.log('MongoDB Connected'))

app.use(express.json());
app.use(cors());
//app.use(express.static("public"));

// app.set('view engine','ejs');
// app.set("views",path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use("/Images",express.static(path.join(__dirname,"./public/Images")))


route.get("/", (req, res) => {
  res.render("home");
});

app.use("/admin", route);

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 3050;
app.listen(PORT, HOST);
console.log(`Server is Running on http://${HOST}:${PORT}`);

//start server only when we have valid connection

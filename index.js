const express = require("express");
const { route } = require("express/lib/router");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//var cors = require('cors');

//sätter upp express app
const app = express();

//connect to mongodb
mongoose.connect(
  "mongodb+srv://felicia:felicia_1234@cluster0.wjyae.mongodb.net/db_servicefinder?retryWrites=true&w=majority"
);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function (callback) {
  console.log("Kopplingen lyckades!");
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());

//initiera routes
app.use("/api", require("./routes/api"));

//app.use(cors());

//error handling middleware
app.use(function (err, req, res, next) {
  //console.log(err);
  res.status(422).send({ error: err.message });
});

//lyssna efter requests
app.listen(process.env.port || 4000, function () {
  console.log("now listening for requests");
});

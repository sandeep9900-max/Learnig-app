const { Router } = require("express");

// const router = express.Router()
const bcrypt = require("bcrypt");

var express = require("express");
var app = express();
const mongoose = require("mongoose");
const User = require("./modal/users");
var bodyParser = require("body-parser");

// use bodyParser as a middleware
var jsonParser = bodyParser.json();

//create connection with mongoDB
mongoose
  .connect(
    // 'mongodb://localhost:27017/my_database',
    "mongodb+srv://test:psvrmqJMTeK9cCk@cluster0.efweo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

// respond with "hello world" when a GET request is made to the homepage
app.post("/user", jsonParser, function (req, res) {
  // User.find({userName})
  const data = new User({
    id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
  });
  data
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => console.log(error, "err"));
  // res.end(req.body.name)
  // res.end('req.body.name')
});
app.listen(4000, () => {
  console.log("server listening in port 4000");
});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1.75435/User");

app.post("/login", (req, res) => {
  // UserModel.create(req.body)
  //   .then((user) => res.json(user))
  //   .catch((err) => res.json(err));
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The Password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running");
});

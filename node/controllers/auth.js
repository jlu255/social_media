const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.signup = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) return res.status(403).send("Email is taken");
  const user = await new User(req.body);
  await user.save();
  res.status(200).send("signup success, please login");
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne;
};

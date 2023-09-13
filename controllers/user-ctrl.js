const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { registerValidation, loginValidation } = require("../utils/validator");

const saltRounds = 10;

const register = async (req, res) => {
  // Check if the req.body valid or not
  const { userName, email, password, isAdmin } = req.body;
  const errors = registerValidation({ userName, email, password, isAdmin });

  if (errors) {
    return res.status(400).json({ errors });
  }

  // Check if the email is already exists
  const oldUser = await User.findOne({ email });

  if (oldUser) {
    return res.status(409).json({ error: "User is already exists" });
  }

  // hash password

  bcrypt.hash(password, saltRounds, async function (err, hash) {
    // Store hash in your password DB.
    console.log(err, hash);
    if (err) {
      return res.status(403).json({ error: "please try another passowrd" });
    }

    const newUSer = { userName, email, password: hash, isAdmin };

    const dbUser = await User.create(newUSer);

    const token = jwt.sign(
      {
        exp: 3600,
        data: dbUser,
      },
      "secret"
    );

    console.log(token);

    return res.status(200).json({
      message: "success",
      token: token,
      id: dbUser._id,
    });
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const error = loginValidation({ email, password });
  if (error) {
    return res.status(400).json({ error });
  }
  // search for user
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
      message: "Your Password is incorrect or this account doesn't exsit",
    });
  }
  // check the password
  const result = await bcrypt.compare(password, user.password);
  if (!result) {
    return res.status(401).json({
      message: "Your Password is incorrect or this account doesn't exsit",
    });
  } else {
    const token = jwt.sign(
      {
        exp: 3600,
        data: user,
      },
      "secret"
    );

    console.log(token);

    return res.status(200).json({
      message: "login success",
      token: token,
      id: user._id,
    });
  }
};

module.exports = { register, login };

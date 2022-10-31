const router = require("express").Router();
const { response } = require("express");
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//REGISTER

router.post("/register", async (req, res) => {
  const newUser = await new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong password or username!");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong password or username!");

    const { password, ...info } = user._doc;

    res.status(200).json(info);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

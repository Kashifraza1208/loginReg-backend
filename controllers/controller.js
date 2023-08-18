const userModel = require("../models/userSchema.js");

exports.addUserRegister = async (req, res) => {
  //req.body will contains name,email,password and it will be come from backend

  try {
    const userexisting = await userModel.findOne({
      $or: [{ email: req.body.email }],
    });

    if (userexisting) {
      return res
        .status(409)
        .json({ message: `User already registered please login again` });
    }
    const useraddregister = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await useraddregister.save();
    res.send({
      message: "Registered Successfully , Please login now",
      useraddregister: useraddregister,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

exports.addUserLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfully", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



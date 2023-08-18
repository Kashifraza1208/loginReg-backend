const express = require("express");

const router = express.Router();

const {
  addUserRegister,
  addUserLogin,
} = require("../controllers/controller.js");

// router.post("/all", addUser);
router.post("/register", addUserRegister);
router.post("/login", addUserLogin);

module.exports = router;

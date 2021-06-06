const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth");

router.get("/delete/:userUID", authController.deleteUser);

module.exports = router;

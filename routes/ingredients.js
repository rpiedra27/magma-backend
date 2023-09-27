const express = require("express");
const router = express.Router();
const { listIngredients } = require("../controllers/ingredients");
const {verifyToken} = require("../middlewares/auth");

router.route("/").get([verifyToken], listIngredients);

module.exports = router;

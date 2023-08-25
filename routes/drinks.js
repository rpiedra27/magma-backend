const express = require("express");
const router = express.Router();
const {
  listDrinks,
} = require("../controllers/drinks");

router
  .route("/")
  .get(listDrinks);

  module.exports = router;
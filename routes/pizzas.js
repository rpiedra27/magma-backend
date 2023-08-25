const express = require("express");
const router = express.Router();
const {
  listPizzas,
} = require("../controllers/pizzas");

router
  .route("/")
  .get(listPizzas);

  module.exports = router;
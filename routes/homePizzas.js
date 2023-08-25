const express = require("express");
const router = express.Router();
const {
  listHomePizzas,
} = require("../controllers/homePizzas");

router
  .route("/")
  .get(listHomePizzas);

  module.exports = router;
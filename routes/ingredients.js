const express = require("express");
const router = express.Router();
const {
  listIngredients,
} = require("../controllers/ingredients");

router
  .route("/")
  .get(listIngredients);

  module.exports = router;
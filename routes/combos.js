const express = require("express");
const router = express.Router();
const {
  listCombos,
} = require("../controllers/combos");

router
  .route("/")
  .get(listCombos);

  module.exports = router;
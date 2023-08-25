const express = require("express");
const router = express.Router();
const {
    listHomeCombos,
} = require("../controllers/homeCombos");

router
  .route("/")
  .get(listHomeCombos);

  module.exports = router;
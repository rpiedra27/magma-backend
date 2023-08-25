const express = require("express");
const router = express.Router();
const {
  listDeserts,
} = require("../controllers/deserts");

router
  .route("/")
  .get(listDeserts);

  module.exports = router;
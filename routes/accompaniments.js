const express = require("express");
const router = express.Router();
const {
  listAccompaniments,
} = require("../controllers/accompaniments");

router
  .route("/")
  .get(listAccompaniments);

  module.exports = router;
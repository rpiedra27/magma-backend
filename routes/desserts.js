const express = require("express");
const router = express.Router();
const { listDesserts } = require("../controllers/desserts");

router.route("/").get(listDesserts);

module.exports = router;

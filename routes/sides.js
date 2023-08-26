const express = require("express");
const router = express.Router();
const { listSides } = require("../controllers/sides");

router.route("/").get(listSides);

module.exports = router;

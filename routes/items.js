const express = require("express");
const {
  getItems,
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");

router.route("/").get(getAllItems);

router.route("/:itemName").get(getItems);

router.route("/").post([verifyToken], createItem);

router.route("/:id").put([verifyToken], updateItem);

router.route("/:id").delete([verifyToken], deleteItem);

module.exports = router;

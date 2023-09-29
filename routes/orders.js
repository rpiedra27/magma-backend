const express = require("express");
const router = express.Router();
const {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orders");
const { verifyToken } = require("../middlewares/auth");

router.route("/:userId").get(getOrders);

router.route("/").post([verifyToken], createOrder);

router.route("/").put([verifyToken], updateOrder);

router.route("/").delete([verifyToken], deleteOrder);

module.exports = router;

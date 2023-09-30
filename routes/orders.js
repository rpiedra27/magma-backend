const express = require("express");
const router = express.Router();
const {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orders");
const { createOrderSchema } = require("../validators/orders");
const { validateSchema } = require("../middlewares/validation");
const { verifyToken } = require("../middlewares/auth");

router.route("/:userId").get(getOrders);

router
  .route("/")
  .post([verifyToken], [validateSchema(createOrderSchema)], createOrder);

router
  .route("/")
  .put([verifyToken], [validateSchema(createOrderSchema)], updateOrder);

router.route("/").delete([verifyToken], deleteOrder);

module.exports = router;

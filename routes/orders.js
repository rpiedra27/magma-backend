const express = require("express");
const router = express.Router();
const { createOrder } = require("../controllers/orders");

router.route("/create-order").post(createOrder);

router.get("/users/:userId/orders/:orderId", (req, res) => {
  // Access userId via: req.params.userId
  res.send(req.params);
});

module.exports = router;

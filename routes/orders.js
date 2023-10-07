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
const { isAuthenticated, checkRoles } = require("../middlewares/auth");
const { ROLES } = require("../utils/constants");

router.route("/:userId").get(getOrders);

router
  .route("/")
  .post(
    [isAuthenticated],
    [checkRoles([ROLES.ADMIN])],
    [validateSchema(createOrderSchema)],
    createOrder
  );

router
  .route("/")
  .put(
    [isAuthenticated],
    [checkRoles([ROLES.ADMIN])],
    [validateSchema(createOrderSchema)],
    updateOrder
  );

router
  .route("/")
  .delete([isAuthenticated], [checkRoles([ROLES.ADMIN])], deleteOrder);

module.exports = router;

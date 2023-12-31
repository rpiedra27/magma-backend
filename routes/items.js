const express = require("express");
const router = express.Router();
const {
  getItemsOfType,
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");
const { createItemSchema } = require("../validators/items");
const { validateSchema } = require("../middlewares/validation");
const { verifyToken } = require("../middlewares/auth");

router.route("/").get(getAllItems);

router.route("/:itemType").get(getItemsOfType);

router
  .route("/")
  .post([verifyToken], [validateSchema(createItemSchema)], createItem);

router
  .route("/:id")
  .put([verifyToken], [validateSchema(createItemSchema)], updateItem);

router.route("/:id").delete([verifyToken], deleteItem);

module.exports = router;

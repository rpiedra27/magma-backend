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
const { isAuthenticated, checkRoles } = require("../middlewares/auth");
const { ROLES } = require("../utils/constants");

router.route("/").get(getAllItems);

router.route("/:itemType").get(getItemsOfType);

router
  .route("/")
  .post(
    [isAuthenticated],
    [checkRoles([ROLES.ADMIN])],
    [validateSchema(createItemSchema)],
    createItem
  );

router
  .route("/:id")
  .put(
    [isAuthenticated],
    [checkRoles([ROLES.ADMIN])],
    [validateSchema(createItemSchema)],
    updateItem
  );

router
  .route("/:id")
  .delete([isAuthenticated], [checkRoles([ROLES.ADMIN])], deleteItem);

module.exports = router;

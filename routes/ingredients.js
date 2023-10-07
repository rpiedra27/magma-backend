const express = require("express");
const router = express.Router();
const {
  getIngredients,
  createIngredient,
  updateIngredient,
  deleteIngredient,
} = require("../controllers/ingredients");
const { createIngredientSchema } = require("../validators/ingredients");
const { validateSchema } = require("../middlewares/validation");
const { isAuthenticated, checkRoles } = require("../middlewares/auth");
const { ROLES } = require("../utils/constants");

router.route("/").get(getIngredients);

router
  .route("/")
  .post(
    [isAuthenticated],
    [checkRoles([ROLES.ADMIN])],
    [validateSchema(createIngredientSchema)],
    createIngredient
  );

router
  .route("/:id")
  .put(
    [isAuthenticated],
    [checkRoles([ROLES.ADMIN])],
    [validateSchema(createIngredientSchema)],
    updateIngredient
  );

router
  .route("/:id")
  .delete([isAuthenticated], [checkRoles([ROLES.ADMIN])], deleteIngredient);

module.exports = router;

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
const { verifyToken } = require("../middlewares/auth");

router.route("/").get(getIngredients);

router
  .route("/")
  .post(
    [verifyToken],
    [validateSchema(createIngredientSchema)],
    createIngredient
  );

router
  .route("/:id")
  .put(
    [verifyToken],
    [validateSchema(createIngredientSchema)],
    updateIngredient
  );

router.route("/:id").delete([verifyToken], deleteIngredient);

module.exports = router;

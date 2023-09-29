const express = require("express");
const router = express.Router();
const {
  getIngredients,
  createIngredient,
  updateIngredient,
  deleteIngredient,
} = require("../controllers/ingredients");
const { verifyToken } = require("../middlewares/auth");

router.route("/").get(getIngredients);

router.route("/").post([verifyToken], createIngredient);

router.route("/:id").put([verifyToken], updateIngredient);

router.route("/:id").delete([verifyToken], deleteIngredient);

module.exports = router;

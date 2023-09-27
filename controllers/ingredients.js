const Ingredient = require("../models/ingredients");
const asyncHandler = require("express-async-handler");

exports.listIngredients = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Ingredients']
  const ingredients = await Ingredient.find().exec();
  res.json(ingredients);
});
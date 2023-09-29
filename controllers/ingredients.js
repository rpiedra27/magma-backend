const Ingredient = require("../models/ingredients");
const asyncHandler = require("express-async-handler");

exports.getIngredients = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Ingredients']
  try {
    const ingredients = await Ingredient.find().exec();
    res.json(ingredients);
  } catch (error) {
    res.status(500).send("Could not fetch resource: " + error);
  }
});

exports.createIngredient = asyncHandler(async (req, res, next) => {
  // #swagger.tags = ['Ingredients']
  if ((await Ingredient.findOne({ value: req.body.value })) !== null) {
    try {
      const ingredient = new Ingredient({
        label: req.body.label,
        price: req.body.price,
        type: req.body.type,
        value: req.body.value,
      });
      const newIngredient = await Ingredient.save(ingredient).exec();
      res.json(newIngredient);
    } catch (err) {
      return next(err);
    }
  } else {
    res.status(409).send("An ingredients with that value already exists");
  }
});

exports.updateIngredient = asyncHandler(async (req, res, next) => {
  // #swagger.tags = ['Ingredients']
  const ingredient = new Ingredient({
    label: req.body.label,
    price: req.body.price,
    type: req.body.type,
    value: req.body.value,
  });
  try {
    const newIngredient = await Ingredient.findByIdAndUpdate(
      req.params.id,
      ingredient
    ).exec();
    res.json(newIngredient);
  } catch (err) {
    return next(err);
  }
  res.json(ingredients);
});

exports.deleteIngredient = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Ingredients']
  try {
    await Ingredient.findByIdAndDelete(req.params.id).exec();
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Could not delete resource " + error);
  }
});

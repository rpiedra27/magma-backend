const Ingredient = require("../models/ingredients");
const asyncHandler = require("express-async-handler");

exports.getIngredients = asyncHandler(async (req, res) => {
  /* #swagger.tags = ['Ingredients']
     #swagger.description = 'Retrieves all the existing ingredients'
  */
  try {
    const ingredients = await Ingredient.find().exec();
    res.json(ingredients);
  } catch (error) {
    res.status(500).send("Could not fetch resource: " + error);
  }
});

exports.createIngredient = asyncHandler(async (req, res, next) => {
  /* #swagger.tags = ['Ingredients']
      #swagger.description = 'Creates a new item'
      #swagger.parameters['obj'] = {
          in: 'body',
          description: 'New ingredient to be created',
          schema: { $ref: '#/definitions/CreateIngredient' }
  } */
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
  /* #swagger.tags = ['Ingredients']
      #swagger.description = 'Updates an existing ingredient'
      #swagger.parameters['obj'] = {
          in: 'body',
          description: 'ID of the ingredient to be updated',
          schema: { $ref: '#/definitions/UpdateIngredient' }
  } */
  const ingredient = new Ingredient({
    label: req.body.label,
    price: req.body.price,
    type: req.body.type,
    value: req.body.value,
  });
  const ingredientId = req.path.slice(1);
  try {
    const newIngredient = await Ingredient.findByIdAndUpdate(
      ingredientId,
      ingredient
    ).exec();
    res.json(newIngredient);
  } catch (err) {
    return next(err);
  }
  res.json(ingredient);
});

exports.deleteIngredient = asyncHandler(async (req, res) => {
  /* #swagger.tags = ['Ingredients']
     #swagger.description = 'Deletes an existing item'
     #swagger.parameters['id'] = { description: 'Id of the ingredient to be deleted' }
  */
  const ingredientId = req.path.slice(1);
  try {
    await Ingredient.findByIdAndDelete(ingredientId).exec();
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Could not delete resource " + error);
  }
});

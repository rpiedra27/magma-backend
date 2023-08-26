const Item = require("../models/items");
const asyncHandler = require("express-async-handler");

exports.drinksList = asyncHandler(async (req, res, next) => {
  // #swagger.tags = ['Drinks']
  const drinks = await Item.find({ type: "drink" }).exec();
  res.json(drinks);
});

exports.listPizzas = asyncHandler(async (req, res, next) => {
  // #swagger.tags = ['Pizzas']
  const pizzas = await Item.find({ type: "pizza" }).exec();
  res.json(pizzas);
});

exports.listDesserts = asyncHandler(async (req, res, next) => {
  // #swagger.tags = ['Desserts']
  const desserts = await Item.find({ type: "dessert" }).exec();
  res.json(desserts);
});

exports.listCombos = asyncHandler(async (req, res, next) => {
  // #swagger.tags = ['Combos']
  const combos = await Item.find({ type: "combo" }).exec();
  res.json(combos);
});

exports.listHomeCombos = asyncHandler(async (req, res, next) => {
  // #swagger.tags = ['HomeCombos']
  const homeCombos = await Item.find({ type: "homeCombo" }).exec();
  res.json(homeCombos);
});

exports.listHomePizzas = asyncHandler(async (req, res, next) => {
  // #swagger.tags = ['HomePizzas']
  const homePizzas = await Item.find({ type: "homePizza" }).exec();
  res.json(homePizzas);
});

exports.listSides = asyncHandler(async (req, res, next) => {
  // #swagger.tags = ['Sides']
  const sides = await Item.find({ type: "side" }).exec();
  res.json(sides);
});

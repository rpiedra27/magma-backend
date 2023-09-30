const Joi = require("joi");

exports.createIngredientSchema = Joi.object({
  label: Joi.string().min(4).max(40).required(),
  type: Joi.string().min(4).max(40).required(),
  price: Joi.number().positive().max(1000000).required(),
  value: Joi.string().min(4).max(40).required(),
});
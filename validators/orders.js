const Joi = require("joi");

exports.createOrderSchema = Joi.object({
  user: Joi.string().hex().length(24).required(),
  cost: Joi.number().positive().max(1000000),
  items: Joi.array().items(Joi.string().hex().length(24)),
});
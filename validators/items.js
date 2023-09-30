const Joi = require("joi");

exports.createItemSchema = Joi.object({
  name: Joi.string().min(4).max(40).required(),
  type: Joi.string().min(4).max(40).required(),
  description: Joi.string().min(4).max(80),
  price: Joi.number().positive().max(1000000),
  image: Joi.string().uri()
});
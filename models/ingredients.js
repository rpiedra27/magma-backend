const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  label: { type: String, required: true, minLength: 4, maxLength: 40 },
  type: { type: String, required: true, minLength: 4, maxLength: 40 },
  price: { type: Number, required: true, min: 0, max: 1000000 },
  value: { type: String, required: true, minLength: 4, maxLength: 40 },
});

module.exports = mongoose.model("Ingredient", IngredientSchema);

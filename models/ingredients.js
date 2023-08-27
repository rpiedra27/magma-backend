const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  label: { type: String, required: true, maxLength: 100 },
  type: { type: String, required: true, maxLength: 100 },
  price: { type: String, required: true, maxLength: 150 },
  value: { type: String, required: true, maxLength: 100 },
});

module.exports = mongoose.model("Ingredient", IngredientSchema);

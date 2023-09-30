const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true, minLength: 4, maxLength: 40 },
  type: { type: String, required: true, minLength: 4, maxLength: 40 },
  description: { type: String, minLength: 4, maxLength: 80},
  price: { type: Number, min: 0, max: 1000000 },
  image: { type: String },
});

module.exports = mongoose.model("Item", ItemSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  type: { type: String, required: true, maxLength: 50 }, //combo/dessert/drink...
  description: { type: String, maxLength: 150 },
  price: { type: Number },
  image: { type: String, maxLength: 200 },
});

module.exports = mongoose.model("Item", ItemSchema);

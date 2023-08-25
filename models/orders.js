const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  cost: { Number },
  date: { type: Date, required: true },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
});

module.exports = mongoose.model("Order", OrderSchema);

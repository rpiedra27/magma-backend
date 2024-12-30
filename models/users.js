const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, minLength: 3, maxLength: 20 },
  email: { type: String, required: true, maxLength: 50 },
  password: { type: String, required: true, minLength: 8, maxLength: 75 },
  roles: [String],
});

module.exports = mongoose.model("User", UserSchema);

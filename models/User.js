const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: Number, default: 0 },
  facebookId: { type: Number, default: 0 },
  name: String,
  gender: String,
  email: String,
  photo: String,
  provider: String
});

module.exports = mongoose.model("users", userSchema);

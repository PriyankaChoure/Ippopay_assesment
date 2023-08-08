const mongoose = require("mongoose");
const PasswordSchema = new mongoose.Schema(
  {
    password: { type: String, required: true },
    count: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Password", PasswordSchema);

const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    ingredients: [String],
    steps: [String],
    createdBy: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", RecipeSchema);

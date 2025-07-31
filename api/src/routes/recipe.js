const router = require("express").Router();
const {
  generateRecipe,
  listRecipes,
} = require("../controllers/recipeController");

router.post("/generate", generateRecipe);
router.get("/", listRecipes);

module.exports = router;

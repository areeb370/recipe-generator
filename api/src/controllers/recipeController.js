const recipeService = require("../services/recipeService");

exports.generateRecipe = async (req, res, next) => {
  try {
    const { ingredients, userId } = req.body;
    const recipe = await recipeService.createFromAI(ingredients, userId);
    res.json(recipe);
  } catch (err) {
    next(err);
  }
};

exports.listRecipes = async (req, res, next) => {
  try {
    const recipes = await recipeService.listAll();
    res.json(recipes);
  } catch (err) {
    next(err);
  }
};

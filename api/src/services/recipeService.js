const axios = require("axios");
const Recipe = require("../models/Recipe");

exports.createFromAI = async (ingredients, userId) => {
  try {
    if (!ingredients || ingredients.length === 0 || !userId) {
      throw new Error("Missing ingredients or user ID");
    }

    let recipeData;

    if (process.env.N8N_WEBHOOK) {
      console.log("🤖 Calling AI service via n8n webhook...");
      const aiRes = await axios.post(process.env.N8N_WEBHOOK, {
        ingredients,
      });
      const aiResponse = aiRes.data;
      console.log(
        "✅ AI response received  1",
        aiResponse[0].choices[0].message
      );
      console.log(
        "✅ AI response received  2",
        aiResponse[0].choices[0].message.content
      );
      const response = aiResponse[0].choices[0].message.content;

      if (!response || !response.title || !Array.isArray(response.steps)) {
        throw new Error("Invalid response from n8n webhook");
      }

      recipeData = {
        title: response.title,
        ingredients: response.ingredients,
        steps: response.steps,
        createdBy: userId,
      };
    } else {
      console.log("📝 Creating mock recipe for development...");
      recipeData = {
        title: `Mock Recipe with ${ingredients.join(", ")}`,
        ingredients,
        steps: [
          "1. Prepare all ingredients and wash them thoroughly",
          "2. Heat oil in a large pan over medium heat",
          "3. Add the main ingredients and cook for 5-7 minutes",
          "4. Add seasonings and spices to taste",
          "5. Cook for an additional 10-15 minutes until everything is well combined",
          "6. Serve hot and enjoy your delicious meal!",
        ],
        createdBy: userId,
      };
    }

    const savedRecipe = await Recipe.create(recipeData);
    console.log("✅ Recipe saved to MongoDB:", savedRecipe.title);
    return savedRecipe;
  } catch (error) {
    console.error("❌ Failed to create recipe:", error.message);
    throw new Error("Failed to create recipe. " + error.message);
  }
};

exports.listAll = async () => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 }).lean();
    console.log(`📋 Found ${recipes.length} recipes`);
    return recipes;
  } catch (error) {
    console.error("❌ Failed to fetch recipes:", error.message);
    throw new Error("Failed to fetch recipes. " + error.message);
  }
};

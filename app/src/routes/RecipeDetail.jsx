import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import recipeClient from "../services/recipeClient";
import Loader from "../components/Loader";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    recipeClient.list()
      .then((all) => setRecipe(all.find((x) => x._id === id)));
  }, [id]);

  if (!recipe) return <Loader />;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-white">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">🍽️</span>
            <h1 className="text-3xl font-bold">{recipe.title}</h1>
          </div>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block text-sm font-medium">
            AI Generated Recipe
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Ingredients Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-2xl mr-2">🥕</span>
              Ingredients
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="grid md:grid-cols-2 gap-2">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-2xl mr-2">👨‍🍳</span>
              Instructions
            </h2>
            <div className="space-y-4">
              {recipe.steps.map((step, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

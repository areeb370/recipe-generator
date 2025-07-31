import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipe/${recipe._id}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
    >
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-2">🍽️</span>
          <h3 className="text-xl font-bold text-gray-800">{recipe.title}</h3>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-green-600 mb-2">Ingredients:</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {recipe.ingredients.join(", ")}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Click to view full recipe →
          </span>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
            AI Generated
          </div>
        </div>
      </div>
    </Link>
  );
}

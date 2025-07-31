import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useRecipes from "../hooks/useRecipes";
import recipeClient from "../services/recipeClient";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import { useAuth } from "../hooks/useAuth";
import Loader from "../components/Loader";

export default function Home() {
  const recipes = useRecipes();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (ingredients) => {
    if (!user) {
      // Redirect to login page if user is not authenticated
      navigate("/login");
      return;
    }
    setLoading(true);
    try {
      await recipeClient.generate(ingredients.split(","), user.id);
      // Refresh the recipes list instead of full page reload
      window.location.reload();
    } catch (error) {
      console.error("Error generating recipe:", error);
      alert("Error generating recipe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SearchBar onGenerate={handleGenerate} />
      {loading && <Loader />}
      {!loading && (
        <div className="space-y-6">
          {recipes.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Your Generated Recipes ({recipes.length})
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((r) => (
                  <RecipeCard key={r._id} recipe={r} />
                ))}
              </div>
            </>
                     ) : (
             <div className="text-center py-12">
               <div className="text-6xl mb-4">🍳</div>
               <h2 className="text-2xl font-bold text-gray-800 mb-2">
                 {user ? "No recipes yet" : "Welcome to Recipe Generator"}
               </h2>
               <p className="text-gray-600">
                 {user 
                   ? "Enter some ingredients above to generate your first recipe!"
                   : "Log in to start generating delicious recipes with AI!"
                 }
               </p>
               {!user && (
                 <div className="mt-6">
                   <Link 
                     to="/login" 
                     className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                   >
                     🔐 Login to Get Started
                   </Link>
                 </div>
               )}
             </div>
           )}
        </div>
      )}
    </div>
  );
}

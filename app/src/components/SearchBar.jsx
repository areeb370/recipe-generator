import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function SearchBar({ onGenerate }) {
  const [input, setInput] = useState("");
  const { user } = useAuth();

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Generate Delicious Recipes with AI
      </h1>
      <p className="text-gray-600 text-center mb-6">
        {user 
          ? "Enter your ingredients and let AI create amazing recipes for you!"
          : "Please log in to generate recipes with AI!"
        }
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onGenerate(input);
          setInput("");
        }}
        className="flex max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={user 
            ? "e.g. chicken, basil, garlic, tomatoes..."
            : "Login required to generate recipes..."
          }
          className={`flex-grow p-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
            !user ? 'bg-gray-100 cursor-not-allowed' : ''
          }`}
          disabled={!user}
        />
        <button
          type="submit"
          className={`px-8 py-4 text-white font-semibold transition-all duration-200 ${
            user 
              ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!user}
        >
          {user ? '🍳 Generate Recipe' : '🔒 Login Required'}
        </button>
      </form>
      {!user && (
        <p className="text-center text-sm text-gray-500 mt-2">
          You'll be redirected to login when you try to generate a recipe
        </p>
      )}
    </div>
  );
}

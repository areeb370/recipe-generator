import { useState, useEffect } from "react";
import recipeClient from "../services/recipeClient";

export default function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    recipeClient.list().then(setRecipes);
  }, []);
  return recipes;
}

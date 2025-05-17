import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import MealCard from "../components/MealCard";
import SearchBar from "../components/SearchBar";

export default function Generate() {
  const { ingredients, recipes, setRecipes } = useContext(SearchContext);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!user) return navigate("/login");

    if (ingredients.length === 0) {
      alert("Please add at least one ingredient!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/recipes/search`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
          body: JSON.stringify({ ingredients }),
        }
      );

      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json();
      const withImages = data.filter((r) => r.image?.trim() !== "");
      setRecipes(withImages); // Store in context
    } catch (err) {
      console.error("Error fetching recipes:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-6">
      <SearchBar />
      <button
        onClick={handleGenerate}
        className="mt-6 mx-auto block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition"
      >
        {loading ? "Loading…" : "Get Recipes"}
      </button>

      <div className="grid gap-6 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((r) => (
          <MealCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}

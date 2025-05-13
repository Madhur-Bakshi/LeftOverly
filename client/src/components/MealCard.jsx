import React from "react";
import { useNavigate } from "react-router-dom";

export default function MealCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col justify-between">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded"
      />

      <div className="mt-4 flex-1">
        <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
        <p className="text-sm text-gray-600">
          Used: {recipe.usedIngredientCount} | Missing:{" "}
          {recipe.missedIngredientCount}
        </p>
      </div>

      <button
        onClick={() => navigate(`/recipes/${recipe.id}`)}
        className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
      >
        View Details
      </button>
    </div>
  );
}

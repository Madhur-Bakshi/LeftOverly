import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MealCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 flex flex-col"
    >
      <div onClick={() => navigate(`/recipes/${recipe.id}`)}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover rounded-t-xl hover:brightness-95 transition duration-300"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            {recipe.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Used: {recipe.usedIngredientCount} | Missing:{" "}
            {recipe.missedIngredientCount}
          </p>
          <div className="mt-auto">
            <button
              onClick={() => navigate(`/recipes/${recipe.id}`)}
              className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

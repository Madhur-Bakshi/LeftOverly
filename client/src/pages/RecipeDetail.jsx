import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import YouTubeVideo from "../components/YouTubeVideo";
import { SearchContext } from "../context/SearchContext";
import { motion } from "framer-motion";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes } = useContext(SearchContext);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipes/${id}`, {
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then(setInfo)
      .catch(console.error);
  }, [id]);

  if (!info)
    return <div className="p-6 text-center text-gray-600">Loading…</div>;

  const calories = info.nutrition.nutrients.find(
    (n) => n.name === "Calories"
  )?.amount;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-gray-800 space-y-10">
      <h1 className="text-4xl font-bold text-center mb-8">{info.title}</h1>
      <motion.img
        src={info.image}
        alt={info.title}
        className="flex h-auto rounded-xl shadow-md mb-8 mx-auto block"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1">
              {info.extendedIngredients.map((ing) => (
                <li key={ing.id}>{ing.original}</li>
              ))}
            </ul>
          </section>

          {info.instructions && (
            <section>
              <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
              <div
                className="leading-relaxed space-y-2"
                dangerouslySetInnerHTML={{ __html: info.instructions }}
              />
            </section>
          )}
        </div>

        <div className="space-y-6">
          <section className="bg-gray-50 p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Nutritional Facts</h2>
            {calories && (
              <p className="text-lg">
                Calories: <span className="font-medium">{calories}</span>
              </p>
            )}
          </section>

          {info.sourceUrl && (
            <section className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Full Recipe</h2>
              <a
                href={info.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                🔗 View Full Recipe Source
              </a>
            </section>
          )}

          <section className="bg-gray-50 p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Watch on YouTube</h2>
            <YouTubeVideo recipeName={info.title} />
          </section>
        </div>
      </div>

      <button
        onClick={() => navigate("/generate")} // ✅ always go to list
        className="mt-6 mx-auto block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
      >
        Back to Recipes
      </button>
    </div>
  );
}

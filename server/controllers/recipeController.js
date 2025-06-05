import axios from "axios";

const SPOON_KEY = process.env.SPOONACULAR_KEY;

export const findByIngredients = async (req, res) => {
  const { ingredients } = req.body;
  try {
    const resp = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients`,
      {
        params: {
          ingredients: ingredients.join(","),
          number: 12,
          ranking: 1,
          apiKey: SPOON_KEY,
        },
      }
    );
    res.json(resp.data); // sends data back
  } catch (err) {
    console.error("Spoonacular error:", err.response?.data || err.message);
    res
      .status(500)
      .json({ message: "Error fetching recipes", error: err.message });
  }
};

export const getRecipeInformation = async (req, res) => {
  const { id } = req.params;
  try {
    const resp = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information`,
      {
        params: { includeNutrition: true, apiKey: SPOON_KEY },
      }
    );
    res.json(resp.data);
  } catch (err) {
    console.error(
      "Spoonacular detail error:",
      err.response?.data || err.message
    );
    res
      .status(500)
      .json({ message: "Error fetching recipe info", error: err.message });
  }
};

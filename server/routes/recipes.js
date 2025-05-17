import express from "express";
import {
  findByIngredients,
  getRecipeInformation,
} from "../controllers/recipeController.js";
import userAuth from "../middlewares/auth.js";

const router = express.Router();

router.post("/search", userAuth, findByIngredients);
router.get("/:id", userAuth, getRecipeInformation);

export default router;

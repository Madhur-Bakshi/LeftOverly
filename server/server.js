import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import connectDB from "./mongodb.js";
import authRoutes from "./routes/authRoutes.js";
import recipeRoutes from "./routes/recipes.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

await connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes); 

app.get("/", (req, res) => res.send("API Working"));

// Start the server

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
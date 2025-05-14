import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

import connectDB from "./mongodb.js";
import authRoutes from "./routes/authRoutes.js";
import recipeRoutes from "./routes/recipes.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to DB
await connectDB();

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);

// ----------------------
// Static Files Setup
// ----------------------

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from React frontend
app.use(express.static(path.join(__dirname, "client", "build")));

// Fallback for SPA (React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});




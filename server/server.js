import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./mongodb.js"
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;


app.use(express.json());
app.use(cors());

await connectDB();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("API Working"));

app.listen(PORT, ()=>{
  console.log(`Server listening on http://localhost:${PORT}`);
});


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/generate");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white p-10 rounded-xl text-slate-500 w-full max-w-md"
      >
        <h2 className="text-center text-2xl text-neutral-700 font-medium mb-2">
          Login
        </h2>

        <p className="text-sm mb-4 text-center">
          Welcome back! Please sign in to continue
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mb-4">
          <img src={assets.email_icon} alt="email" width={16} />
          <input
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none text-sm w-full"
            required
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mb-2">
          <img src={assets.lock_icon} alt="lock" width={14} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none text-sm w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="mt-5 text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
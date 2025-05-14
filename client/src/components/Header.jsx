import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSearchContext } from "../context/SearchContext";

const Header = () => {
  const { user } = useAuth();
  const { clearSearchData } = useSearchContext();
  const navigate = useNavigate();

  const handleClick = () => {
    clearSearchData();
    navigate(user ? "/generate" : "/login");
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-center items-center mt-14 px-4 text-center"
    >
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Turn <span className="text-green-600">leftovers </span>
        to <span className="text-yellow-600">Meals!</span>
      </h1>
      <div className="mt-6">
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default Header;

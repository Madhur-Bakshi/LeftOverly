import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSearchContext } from "../context/SearchContext";

const GenerateBtn = () => {
  const { user } = useAuth();
  const { clearSearchData } = useSearchContext();
  const navigate = useNavigate();

  const handleClick = () => {
    clearSearchData();
    navigate(user ? "/generate" : "/login");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="pb-16 text-center"
    >
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Try it Now
      </button>
    </motion.div>
  );
};

export default GenerateBtn;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const GenerateBtn = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate("/generate");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="pb-16 text-center">
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-lg rounded-full shadow-md transition duration-300"
      >
        Try it Now
      </button>
    </div>
  );
};

export default GenerateBtn;

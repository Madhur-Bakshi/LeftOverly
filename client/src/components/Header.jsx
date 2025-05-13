import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSearchContext } from "../context/SearchContext";

const Header = () => {
  const { user } = useAuth();
  const { clearSearchData } = useSearchContext();
  const navigate = useNavigate();

  const handleClick = () => {
    clearSearchData(); // clear input and results
    if (user) {
      navigate("/generate");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-bold">
        Turn <span className="text-green-600">leftovers </span>to{" "}
        <span className="text-yellow-600">Meals!</span>
      </h1>
      <div className="mt-6">
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-lg rounded-full shadow-md transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;

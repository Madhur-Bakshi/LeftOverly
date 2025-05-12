import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-2 mt-2">
      <Link to="/" className="flex items-center font-myFont text-3xl">
        <img
          src={assets.logo}
          alt="Logo"
          className="h-12 w-16 rounded-lg border-2"
        />
        <span className="font-myFont text-4xl ml-2">LeftOverly</span>
      </Link>

      <div className="flex items-center gap-2">
        {user ? (
          <>
            <div className="text-gray-600 text-sm sm:text-base">
              Hi, {user.username}
            </div>
            <button
              onClick={handleLogout}
              className="text-red-500 text-sm sm:text-base"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="text-blue-500 text-sm sm:text-base">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-bold">
        Turn <span className="text-green-600">leftovers </span>to{" "}
        <span className='text-yellow-600'>Meals!</span>
      </h1>
      <div className="mt-6">
        <Link to="/recipes">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-lg rounded-full shadow-md transition duration-300">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Header
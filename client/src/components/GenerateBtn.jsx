import React from 'react'
import { Link } from 'react-router-dom'
const GenerateBtn = () => {
  return (
    <div className="pb-16 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">
        See the magic. Try now
      </h1>
      <Link to="/recipes">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-lg rounded-full shadow-md transition duration-300">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default GenerateBtn
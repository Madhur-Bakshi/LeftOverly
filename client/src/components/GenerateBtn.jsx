import React from 'react'
import { Link } from 'react-router-dom'
const GenerateBtn = () => {
  return (
    <div className="pb-16 text-center">
      <Link to="/generate">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-lg rounded-full shadow-md transition duration-300">
          Try it Now
        </button>
      </Link>
    </div>
  );
}

export default GenerateBtn
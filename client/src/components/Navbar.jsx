import React from 'react'
import {assets} from '../assets/assets'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-2 mt-2">
      {/* Left Section - Logo and Brand Name */}
      <Link to="/" className="flex items-center font-myFont text-3xl">
        <img
          src={assets.logo}
          alt=""
          className="h-12 w-16 rounded-lg border-2"
        />
        <span className="font-myFont text-4xl ml-2">LeftOverly</span>
      </Link>

      {/* Right Section - User Greeting */}
      <div className='flex items-center gap-2'>

      <div className="text-gray-600 text-sm sm:text-base">Hi, user</div>
      <div className="text-gray-600 text-sm sm:text-base">Logout</div>
      </div>

    </div>
  );
};


export default Navbar
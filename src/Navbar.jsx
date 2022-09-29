import React from "react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr"


function Navbar({ productCount }) {
  return (


    <header className="bg-white shadow-lg h-24  md:flex">
      <a href="/" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
        <img className="w-48 hover:border-indigo-600 border-2 rounded-md border-white " src="https://media.discordapp.net/attachments/999601406514298951/1020992707973361735/IMG_20220918_151014.jpg" alt="" />
      </a>
      <nav className="header-links contents font-semibold text-base sm:text-sm lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          <li className="p-3 xl:p-6 active">
            <a href="">
              <Link className=" hover:text-indigo-700" to="/">Home</Link>
            </a>
          </li>

          <li className="p-3 xl:p-6">
            <Link className=" hover:text-indigo-700" to="/About">About</Link>
          </li>

          <li className="p-3 xl:p-6">
            <Link to="/Skills">
              <span className=" hover:text-indigo-700">Skills</span>
            </Link>
          </li>
          <li className="p-3 xl:p-6 ">
            <Link to="/Contact">
              <span className=" hover:text-indigo-700">Contacts</span>
            </Link>
          </li>

        </ul>
        <div className="flex justify-items-center justify-center text-white">
          <Link to="/cart">
            <div className="flex flex-col items-center">
              <GrCart className="text-5xl text-white hover:bg-indigo-500 rounded-md mt-5 mx-3 p-1 border border-black" />
              <span className=" hover:text-indigo-700 bg-white text-black font-extrabold">{productCount}</span>
            </div>

          </Link>

        </div>
      </nav>
      <div className="border flex items-center px-4 lg:px-6 xl:px-8">
        <Link to="/Signup" className="bg-indigo-600 hover:bg-gray-700 text-white font-bold px-4 xl:px-4 py-2 xl:py-2 rounded-lg">Sign Up</Link>
      </div>
    </header>

   

  );
}
export default Navbar;
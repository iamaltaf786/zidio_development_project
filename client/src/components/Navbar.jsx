import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/desktop-logo.png";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-40">
          <a href="https://zidio.in/">
            <img src={logo} alt="logo" className="h-12" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex items-center justify-between w-full lg:w-auto transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="lg:flex items-center gap-6 text-lg text-gray-700 flex flex-col lg:flex-row mt-4 lg:mt-0">
            <li>
              <Link to="/" className="hover:text-blue-600">
                DASHBOARD
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                ALL PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-600">
                ADD TASK
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-600">
                ADMIN
              </Link>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0 lg:ml-6">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
              GET QUOTE
            </button>
            {/* <div className="flex items-center bg-blue-600 text-white rounded-md">
              <Link to="/login" className="px-4 py-2 hover:bg-blue-500 rounded-md">Login</Link>
              <span className="px-2">/</span>
              <Link to="/signup" className="px-4 py-2 hover:bg-blue-500 rounded-md">Signup</Link>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

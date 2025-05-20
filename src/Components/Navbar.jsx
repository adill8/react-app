import React, { useState } from 'react';
import { FiUser, FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-7">
      <div className="container flex justify-between items-center mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Furniro</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 text-lg font-medium">
          <li className='px-4'><Link to="/">Home</Link></li>
          <li className='px-4'><a href="#">Shop</a></li>
          <li className='px-4'><a href="#">About</a></li>
          <li className='px-4'><a href="#">Contact</a></li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex space-x-8 text-xl text-gray-700">
          <FiUser />
          <FiSearch />
          <FiHeart />
          <FiShoppingCart />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-700 font-medium">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">Shop</a>
          <a href="#" className="block">About</a>
          <a href="#" className="block">Contact</a>

          <div className="flex space-x-4 text-xl pt-2">
            <FiUser />
            <FiSearch />
            <FiHeart />
            <FiShoppingCart />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

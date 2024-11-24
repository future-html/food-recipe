import React, { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-600">TastyBites</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="/recipes" className="text-gray-700 hover:text-orange-600">Recipes</a>
            <a href="/blog" className="text-gray-700 hover:text-orange-600">Blog</a>
            <a href="/about" className="text-gray-700 hover:text-orange-600">About</a>
            <a href="/contact" className="text-gray-700 hover:text-orange-600">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-64 px-4 py-1 text-black rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <FiSearch className="absolute right-3 top-2 text-gray-400" />
            </div>
            <button className="ml-4 px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
              Submit Recipe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Home</a>
              <a href="/recipes" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Recipes</a>
              <a href="/blog" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Blog</a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">About</a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Contact</a>
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <FiSearch className="absolute right-3 top-3 text-gray-400" />
              </div>
              <button className="mt-3 w-full px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
                Submit Recipe
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

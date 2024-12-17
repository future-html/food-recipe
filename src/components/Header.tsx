import React, { useState, useRef} from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAnimating = useRef(false); // Ref to track animation state

  const toggleMenu = () => {
    if (!isAnimating.current) {
      isAnimating.current = true; // Set animating state
      setIsMenuOpen((prev) => !prev); // Toggle menu state

      // Delay state change to allow animation to complete
      setTimeout(() => {
        isAnimating.current = false; // Reset animating state
      }, 300); // Match this duration with your animation duration
    }
  };



  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="lg:container  mx-auto md:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-600">TastyBites</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="/recipes" className="text-gray-700 hover:text-orange-600">Recipes</a>
            <a href="/blog" className="text-gray-700 hover:text-orange-600">Blog</a>
            <a href="/about" className="text-gray-700 hover:text-orange-600">About</a>
            <a href="/contact" className="text-gray-700 hover:text-orange-600">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center">
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



{/* Mbile btn */}
          <div className="lg:hidden">
  <div
    onClick={toggleMenu}
    aria-label='Toggle Menu'
    className="text-gray-700 hover:text-orange-600"
  >
    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
  </div>
</div>


        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div          className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'animate-fadeInDown' : 'animate-fadeOutUp'}`}
          id = 'panel'>
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

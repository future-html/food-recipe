import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedRecipes from './components/FeaturedRecipes';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { FiMoon, FiSun } from 'react-icons/fi';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 p-3 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>

      {/* Main Content */}
      <div className="bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <FeaturedRecipes />
          <Categories />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;

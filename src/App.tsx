import React, { useState, useEffect, Children } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedRecipes from './components/FeaturedRecipes';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Route, Routes } from 'react-router-dom';
import CTA from './components/CTA';
import RecipePage from './pages/RecipePage';


 

const App: React.FC = () => {
  

  const [query, setQuery] = useState<string>(''); 
  


  // src/App.tsx

const BodyWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-black');
    } else {
      document.body.classList.remove('bg-black');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`min-h-screen relative ${darkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>
      {children}
    </div>
  );
};

  

  return (
    

     
      <Routes>
            <Route path="/" element = {<React.Fragment>
              <div className='relative'>
              <BodyWrapper>
   <Header/>
    <Hero query={query} setQuery={setQuery} />
              <FeaturedRecipes query={query} />
              <Categories />
              <CTA />
              <Testimonials />
<Footer/>
   </BodyWrapper>
              </div>
   
    </React.Fragment>}>
              
            </Route>
            <Route path="/add-recipe" element={
              <RecipePage/>} /> {/* Route to the Recipe Page */}
        </Routes>
   
  );
};

export default App;

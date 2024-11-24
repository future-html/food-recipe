import React from 'react';
import { FiCoffee, FiSun, FiMoon, FiPackage, FiHeart } from 'react-icons/fi';

const categories = [
  {
    id: 1,
    name: 'Breakfast',
    icon: <FiCoffee className="w-8 h-8" />,
    count: 125,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    name: 'Lunch',
    icon: <FiSun className="w-8 h-8" />,
    count: 147,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80'
  },
  {
    id: 3,
    name: 'Dinner',
    icon: <FiMoon className="w-8 h-8" />,
    count: 158,
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  
  {
    id: 5,
    name: 'Snacks',
    icon: <FiPackage className="w-8 h-8" />,
    count: 92,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 6,
    name: 'Vegan',
    icon: <FiHeart className="w-8 h-8" />,
    count: 73,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
];

const CategoryCard: React.FC<{ category: typeof categories[0] }> = ({ category }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl cursor-pointer">
      {/* Background Image */}
      <div className="relative h-64">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-4">
          {category.icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
        <p className="text-sm opacity-90">{category.count} Recipes</p>
      </div>
    </div>
  );
};

const Categories: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of recipes organized by meal type and dietary preferences
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

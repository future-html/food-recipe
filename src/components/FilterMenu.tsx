import React from 'react';

const FilterMenu: React.FC<{ onFilter: (category: string) => void }> = ({ onFilter }) => {
    const categories = ['All', 'Savory', 'Desserts', 'Vegetarian'];

    return (
        <select onChange={(e) => onFilter(e.target.value)}>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default FilterMenu;
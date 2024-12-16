import React from 'react';

const RecipeCard: React.FC<{ recipe: any }> = ({ recipe }) => {
    return (
        <div>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default RecipeCard;
import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList: React.FC<{ recipes: any[] }> = ({ recipes }) => {
    return (
        <div>
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;
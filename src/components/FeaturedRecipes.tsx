import React, { useEffect, useState } from "react";
import { Recipe, mockRecipes } from "../types/Recipe";

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
	return (
		<div className=" rounded-lg border overflow-hidden shadow-lg dark:shadow-lg dark:shadow-white hover:shadow-xl transition-shadow duration-300">
			<div className="relative h-48">
				<img
					src={recipe.image}
					alt={recipe.title}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-semibold mb-2 ">{recipe.title}</h3>
				<p className=" mb-4">{recipe.description}</p>
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<svg
							className="w-5 h-5 text-gray-500 mr-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span className="">{recipe.prep_time}</span>
					</div>
					<span
						className={`px-3 py-1 rounded-full text-sm font-medium ${
							recipe.difficulty === "Easy"
								? "bg-green-100 text-green-800"
								: recipe.difficulty === "Medium"
								? "bg-yellow-100 text-yellow-800"
								: "bg-red-100 text-red-800"
						}`}
					>
						{recipe.difficulty}
					</span>
				</div>
			</div>
		</div>
	);
};

const FeaturedRecipes: React.FC<{ query: string }> = ({ query }) => {
	const [filteredMockRecipes, setFilteredMockRecipes] = useState<Recipe[]>(mockRecipes);

	// Filter recipes based on query
	useEffect(() => {
		const filtered = mockRecipes.filter((recipe) => recipe.title.toLowerCase().includes(query.toLowerCase()));
		setFilteredMockRecipes(filtered);
	}, [query]);

	const [index, setIndex] = useState(9);

	// Load more recipes
	const loadMoreRecipes = () => {
		setIndex((prev) => prev + 9);
	};

	return (
		<section className="py-16 transition-all duration-300 px-4 bg-gray-50 text-gray-900 dark:text-gray-50 dark:bg-black">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold  mb-4">Featured Recipes</h2>
					<p className="text-lg max-w-2xl mx-auto">
						Discover our hand-picked selection of delicious recipes that are perfect for any occasion
					</p>
				</div>

				{/* Recipe Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredMockRecipes.slice(0, index).map((recipe) => (
						<RecipeCard
							key={recipe.id}
							recipe={recipe}
						/>
					))}
				</div>

				{/* View All Button */}
				<div className="text-center mt-12">
					<button
						onClick={loadMoreRecipes}
						className="px-8 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors text-lg font-semibold"
					>
						View All Recipes
					</button>
				</div>
			</div>
		</section>
	);
};

export default FeaturedRecipes;

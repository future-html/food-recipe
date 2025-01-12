import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface HeroProps {
	query: string;
	setQuery: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ query, setQuery }) => {
	const [inputValue, setInputValue] = useState(query); // Local state for input

	return (
		<div className="relative h-[600px] mt-16">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
				}}
			>
				<div className="absolute inset-0 bg-black bg-opacity-50"></div>
			</div>

			{/* Content */}
			<div className="relative h-full flex flex-col items-center justify-center text-white px-4">
				<h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Discover Recipes That Delight</h1>
				<p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
					Explore thousands of delicious recipes from around the world
				</p>

				{/* Search Box */}
				<form
					action="/"
					className="w-full max-w-2xl relative"
					onSubmit={(e) => {
						e.preventDefault();
						setQuery(inputValue); // Update the query state
					}}
				>
					<input
						type="search"
						id="gsearch"
						name="gsearch"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)} // Update local input state
						placeholder="Search by ingredients or recipe name..."
						className="w-full px-6 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
					/>
					<label htmlFor="xx">
						<input
							type="submit"
							name="xx"
							id="xx"
							className="hidden"
						/>
						<div className="absolute right-2 top-2 bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors flex items-center">
							<FiSearch className="mr-2" />
							Search
						</div>
					</label>
				</form>

				{/* Explore Button */}
				<button className="mt-8 px-8 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors text-lg font-semibold">
					Explore Recipes
				</button>
			</div>
		</div>
	);
};

export default Hero;

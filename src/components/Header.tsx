import React, { useState, useRef } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { FiMoon, FiSun } from "react-icons/fi";
const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const isAnimating = useRef(false); // Ref to track animation state

	const [darkMode, setDarkMode] = useState(true);

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
		<header className="bg-white transition-all duration-300 dark:bg-black shadow-md fixed w-full top-0 z-50">
			<div className="lg:container  mx-auto md:px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<h1 className="text-2xl font-bold text-orange-600">TastyBites</h1>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex space-x-8">
						<a
							href="/"
							className="dark:text-white dark:hover:text-amber-200 duration-500 transition-all ease-in-out text-gray-700 hover:text-orange-600"
						>
							Home
						</a>
						<a
							href="/recipes"
							className="dark:text-white dark:hover:text-amber-200 duration-500 transition-all ease-in-out text-gray-700 hover:text-orange-600"
						>
							Recipes
						</a>
						<a
							href="/blog"
							className="dark:text-white dark:hover:text-amber-200 duration-500 transition-all ease-in-out text-gray-700 hover:text-orange-600"
						>
							Blog
						</a>
						<a
							href="/about"
							className="dark:text-white dark:hover:text-amber-200 duration-500 transition-all ease-in-out text-gray-700 hover:text-orange-600"
						>
							About
						</a>
						<a
							href="/contact"
							className="dark:text-white dark:hover:text-amber-200 duration-500 transition-all ease-in-out text-gray-700 hover:text-orange-600"
						>
							Contact
						</a>
					</nav>

					{/* Search Bar */}
					<div className="hidden lg:flex items-center">
						<button
							onClick={() => {
								setDarkMode(!darkMode);
								darkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark");
							}}
							className=" p-2  bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
							aria-label="Toggle dark mode"
						>
							{darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
						</button>
					</div>

					{/* Mbile btn */}
					<div className="lg:hidden flex items-center">
						<div
							onClick={toggleMenu}
							aria-label="Toggle Menu"
							className="text-gray-700 dark:text-white hover:text-orange-600"
						>
							{isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
						</div>
						<button
							onClick={() => {
								setDarkMode(!darkMode);
								darkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark");
							}}
							className=" p-2  bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
							aria-label="Toggle dark mode"
						>
							{darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div
						className={`overflow-hidden transition-all duration-300 ease-in-out ${
							isMenuOpen ? "animate-fadeInDown" : "animate-fadeOutUp"
						}`}
						id="panel"
					>
						<div className="px-4 *:text-center pt-2 pb-3 space-y-1">
							<a
								href="/"
								className="dark:text-white block w-full dark:hover:text-amber-200 duration-500 transition-all ease-in-out text-gray-700 hover:text-orange-600"
							>
								Home
							</a>
							<a
								href="/recipes"
								className="dark:text-white block w-full dark:hover:text-amber-200 duration-500 transition-all ease-in-out text-gray-700 hover:text-orange-600"
							>
								Recipes
							</a>
							<a
								href="/blog"
								className="dark:text-white block w-full dark:hover:text-amber-200 duration-500 transition-all ease-in-out text-gray-700 hover:text-orange-600"
							>
								Blog
							</a>
							<a
								href="/about"
								className="dark:text-white block w-full dark:hover:text-amber-200 duration-500 transition-all ease-in-out text-gray-700 hover:text-orange-600"
							>
								About
							</a>
							<a
								href="/contact"
								className="dark:text-white block w-full dark:hover:text-amber-200 duration-500 transition-all ease-in-out text-gray-700 hover:text-orange-600"
							>
								Contact
							</a>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;

import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const testimonials = [
	{
		id: 1,
		name: "Sarah Johnson",
		role: "Home Chef",
		content:
			"The recipes on this site have transformed my cooking! The detailed instructions and tips make even complex dishes approachable.The recipes on this site have transformed my cooking! The detailed instructions and tips make even complex dishes approachable.",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
	},
	{
		id: 2,
		name: "Michael Chen",
		role: "Food Enthusiast",
		content:
			"I love how diverse the recipe collection is. From traditional to modern fusion dishes, there's something for everyone.",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
	},
	{
		id: 3,
		name: "Emily Rodriguez",
		role: "Culinary Student",
		content:
			"As a culinary student, I find the techniques and tips incredibly helpful. The step-by-step photos are a game-changer!",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
	},
	{
		id: 4,
		name: "Sarah Johnson",
		role: "Home Chef",
		content:
			"The recipes on this site have transformed my cooking! The detailed instructions and tips make even complex dishes approachable.",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
	},
	{
		id: 5,
		name: "Michael Chen",
		role: "Food Enthusiast",
		content:
			"I love how diverse the recipe collection is. From traditional to modern fusion dishes, there's something for everyone.",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
	},
	{
		id: 6,
		name: "Emily Rodriguez",
		role: "Culinary Student",
		content:
			"As a culinary student, I find the techniques and tips incredibly helpful. The step-by-step photos are a game-changer! The recipes on this site have transformed my cooking! The detailed instructions and tips make even complex dishes approachable.The recipes on this site have transformed my cooking! The detailed instructions and tips make even complex dishes approachable.",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
	},
];

const TestimonialCard: React.FC<{ testimonial: (typeof testimonials)[0] }> = ({ testimonial }) => {
	return (
		<div className="flex flex-col rounded-xl  dark:shadow-lg dark:shadow-white shadow-lg p-8 mx-4">
			<div className="flex mb-6">
				<img
					src={testimonial.image}
					alt={testimonial.name}
					className="w-16 h-16 rounded-full object-cover mr-4"
				/>
				<div>
					<h4 className="text-xl font-semibold ">{testimonial.name}</h4>
					<p className="">{testimonial.role}</p>
				</div>
			</div>
			<div className="flex flex-col justify-between  flex-1">
				<p className=" leading-relaxed line-clamp-3">{testimonial.content}</p>

				<div className="mt-6 flex justify-start ">
					{[1, 2, 3, 4, 5].map((star: any) => (
						<svg
							key={star}
							className="w-5 h-5 text-yellow-400"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
					))}
				</div>
			</div>
		</div>
	);
};

const Testimonials: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleItems, setVisibleItems] = useState(1); // Number of testimonials visible per page
	const gridRef = useRef<HTMLDivElement | null>(null);

	// Update the number of visible items based on screen width
	useEffect(() => {
		const updateVisibleItems = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth >= 1024) {
				setVisibleItems(3); // lg: w-1/3 (3 testimonials per page)
			} else if (screenWidth >= 768) {
				setVisibleItems(2); // md: w-1/2 (2 testimonials per page)
			} else {
				setVisibleItems(1); // default: w-full (1 testimonial per page)
			}
		};

		// Initial call to set visible items
		updateVisibleItems();

		// Add event listener for window resize
		window.addEventListener("resize", updateVisibleItems);

		// Cleanup event listener
		return () => window.removeEventListener("resize", updateVisibleItems);
	}, []);

	useEffect(() => {
		AOS.init({
			duration: 1200, // Animation duration in milliseconds
			once: true, // Animation happens only once
		});
	}, []);
	// Auto-rotate testimonials
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex + visibleItems >= testimonials.length ? 0 : prevIndex + visibleItems
			);
		}, 5000);

		return () => clearInterval(timer);
	}, [visibleItems]);

	// Calculate the number of dots based on visible items
	const numberOfDots = Math.ceil(testimonials.length / visibleItems);

	return (
		<section className="py-16 px-4 bg-gray-50 dark:bg-black dark:text-white text-black">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
					<p className="text-lg max-w-2xl mx-auto">Hear from our community of home chefs and food enthusiasts</p>
				</div>

				{/* Testimonials Carousel */}
				<div className="relative overflow-hidden ">
					<div
						className="flex transition-transform duration-1000 ease-in-out"
						style={{
							transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
						}}
					>
						{testimonials.map((testimonial, index) => (
							<div
								key={testimonial.id}
								className="flex flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
								data-aos="fade-up"
								data-aos-delay={500 * index}
							>
								<TestimonialCard testimonial={testimonial} />
							</div>
						))}
					</div>

					{/* Navigation Dots */}
					<div className="flex justify-center mt-8">
						{Array.from({ length: numberOfDots }).map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index * visibleItems)}
								className={`w-3 h-3 rounded-full mx-2 transition-colors ${
									currentIndex >= index * visibleItems && currentIndex < (index + 1) * visibleItems
										? "bg-orange-600"
										: "bg-gray-300"
								}`}
								aria-label={`Go to testimonial page ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

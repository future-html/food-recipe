import React from "react";

const FAQEach = () => {
	const [openAccordion, setOpenAccordion] = React.useState(false);
	return (
		<div className="py-6 border-b">
			<div className="flex justify-between">
				<span className="question">Question 1</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className={`size-6 cursor-pointer ${
						openAccordion ? "rotate-180 animate-rotate180" : "rotate-360 animate-rotate360"
					} `}
					onClick={() => {
						setOpenAccordion(!openAccordion);
					}}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m19.5 8.25-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</div>
			{openAccordion && (
				<div>
					<span className="answer  inline-block mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, modi maiores. Debitis vero temporibus
						nam, quisquam fugiat commodi ad fugit?
					</span>
				</div>
			)}
		</div>
	);
};

export default FAQEach;

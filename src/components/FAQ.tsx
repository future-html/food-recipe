import FAQEach from "./FAQEach";
const FAQ = () => {
	// const [animate, setAnimate] = React.useState(false);

	// useEffect(() => {
	// 	// execute by add animation rotate 180 deg after click svg icon
	// }, [openAccordion]);

	// useEffect(() => {
	// 	if (openAccordion) {
	// 		setAnimate(true);
	// 		// Remove animation class after animation ends
	// 		const timer = setTimeout(() => {
	// 			setAnimate(false);
	// 		}, 300); // Match the duration of the animation (0.3s)

	// 		return () => clearTimeout(timer); // Clean up the timeout if component unmounts
	// 	}
	// }, [openAccordion]);

	return (
		<section>
			<div className="px-8">
				<div className="py-5 max-w-[80rem] mx-auto">
					<h2 className="w-full text-center">Affordable Pricing</h2>

					<p className="max-w-[36rem] mt-4 mx-auto text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</p>
					<div className="mt-10 grid lg:grid-cols-2 lg:gap-6 max-w-[1024px] mx-auto">
						<FAQEach></FAQEach>
						<FAQEach></FAQEach>
						<FAQEach></FAQEach>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;

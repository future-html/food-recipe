import CardFeature from "./CardFeature";
const Pricing = () => {
	return (
		<section className="relative">
			<div className="px-8">
				<div className="md:px-8 md:py-20">
					{/* Text */}
					<div className="mt-8">
						<h2 className="w-full text-center">Affordable Pricing</h2>

						<p className="max-w-[36rem] mt-4 mx-auto text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
							et dolore magna aliqua.
						</p>
					</div>
					{/* CardListPrice */}
					<div className="mt-16 grid lg:grid-cols-3">
						<CardFeature></CardFeature>
						<CardFeature></CardFeature>
						<CardFeature></CardFeature>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;

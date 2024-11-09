const features = [
	{
		title: "Secure",
		description: "We strictly only deal with vendors that provide top notch security infrastructure.",
		icon: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="stroke-purple-600"
			>
				<path
					d="M12 2L4 5v6c0 5.523 4.477 10 10 10s10-4.477 10-10V5l-8-3z"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 11v3"
					stroke="stroke-purple-600"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
	},
	{
		title: "24/7 Support",
		description: "Lorem ipsum dolor amet siti ceali ut enim ad minim veniam, quis nostrud.",
		icon: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				className="stroke-purple-600"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 3C6.477 3 2 7.477 2 13c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 8v5l3 3"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
	},
	{
		title: "Customizable",
		description: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				className="size-6 stroke-purple-600"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
				/>
			</svg>
		),
	},
	{
		title: "Reliable",
		description: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				className="size-6 stroke-purple-600"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
				/>
			</svg>
		),
	},
	{
		title: "Fast",
		description: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				className="size-6 stroke-purple-600"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
				/>
			</svg>
		),
	},
	{
		title: "Easy",
		description: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
		icon: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="size-6 stroke-purple-600"
			>
				<path
					d="M12 2a10 10 0 100 20 10 10 0 000-20z"
					stroke="stroke-purple-600"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 12h6"
					stroke="stroke-purple-600"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
	},
];

const Hero = () => {
	return (
		<section className="max-w-[64rem] mx-auto py-20">
			<div>
				<h2 className="w-full text-center">Amazing Features</h2>

				<p className="max-w-[36rem] mt-4 mx-auto text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua.
				</p>
				<div className="mt-10"></div>
				<ul className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
					{features.map((feature, index) => {
						return (
							<li
								key={index}
								className="card-feature max-w-[20rem] mx-auto px-2 py-8"
							>
								<div className=" p-5 bg-white inline-flex rounded-full">{feature.icon}</div>
								<div className="mt-6">
									<h3>{feature.title}</h3>
									<p className="mt-2">{feature.description}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Hero;

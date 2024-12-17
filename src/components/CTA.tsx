import { Link } from "react-router-dom";
const CTA = () => {
	return (
		<section className="text-black bg-white">
			<div className="px-8 py-20">
			<div className="md:mt-12 lg:mt-20 flex flex-col-reverse mt-8 md:flex-row-reverse md:items-center md:gap-6 lg:gap-10">
					<div className="md:w-1/2">
						<div className="max-md:pt-24 ">
							<span className="font-semibold text-[1.5rem] ">Fast and delicious</span>
							<h2 className="CTA mt-4">This food app is highly recommmend</h2>
							<p className="CTA mt-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<Link
								to="/"
								className="inline-flex px-5 py-2 bg-gray-200 mt-4 rounded-md"
							>
								Learn More
							</Link>
						</div>
					</div>
					<div className="flex justify-center">
						<img
							src="https://img.freepik.com/free-photo/close-up-hands-holding-smartphone_23-2149250082.jpg"
							alt="Image CTA"
							className="w-full h-[300px] object-contain"
						/>
					</div>
				</div>
				<div className="md:mt-12 lg:mt-20 flex flex-col-reverse mt-8 md:flex-row md:items-center md:gap-6 lg:gap-10">
					<div className="md:w-1/2">
						<div className="max-md:pt-24 ">
							<span className="font-semibold text-[1.5rem] ">Fast and delicious</span>
							<h2 className="CTA mt-4">This food app is highly recommmend</h2>
							<p className="CTA mt-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<Link
								to="/"
								className="inline-flex px-5 py-2 bg-gray-200 mt-4 rounded-md"
							>
								Learn More
							</Link>
						</div>
					</div>
					<div className="flex justify-center">
						<img
							src="https://img.freepik.com/free-photo/close-up-hands-holding-smartphone_23-2149250082.jpg"
							alt="Image CTA"
							className="w-full h-[300px] object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;

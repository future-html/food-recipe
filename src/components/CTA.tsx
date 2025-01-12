import { Link } from "react-router-dom";
const CTA = () => {
	return (
		<section className="text-black dark:text-white bg-white dark:bg-black">
			<div className="px-8 py-20">
				<div className="flex py-10 flex-col border  md:items-center md:flex-row md:mt-12 lg:mt-20 md:justify-evenly mt-8 md:gap-6 lg:gap-10">
					<div className="grid place-self-center">
						<img
							src="https://img.freepik.com/free-photo/close-up-hands-holding-smartphone_23-2149250082.jpg"
							alt="Image CTA"
							className="aspect-square w-[400px] object-contain"
						/>
					</div>
					<div className="max-md:max-w-[40rem] max-md:mx-auto md:max-w-md max-md:text-center">
						<span className="font-semibold text-[1.5rem]">Fast and delicious</span>
						<h2 className="CTA mt-4">This food app is highly recommend</h2>
						<p className="CTA mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
							et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat.
						</p>
						<a
							className="inline-flex px-5 py-2 bg-gray-200 dark:text-black mt-4 rounded-md"
							href="/"
						>
							Learn More
						</a>
					</div>
				</div>
				<div className="flex py-10 border flex-col md:items-center md:flex-row-reverse md:mt-12 lg:mt-20 md:justify-around mt-8 md:gap-6 lg:gap-10">
					<div className="grid place-self-center">
						<img
							src="https://img.freepik.com/free-photo/close-up-hands-holding-smartphone_23-2149250082.jpg"
							alt="Image CTA"
							className="aspect-square w-[400px] object-contain"
						/>
					</div>
					<div className="max-md:max-w-[40rem] max-md:mx-auto md:max-w-md max-md:text-center">
						<span className="font-semibold text-[1.5rem]">Fast and delicious</span>
						<h2 className="CTA mt-4 ">This food app is highly recommend</h2>
						<p className="CTA mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
							et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat.
						</p>
						<a
							className="inline-flex dark:text-black px-5 py-2 bg-gray-200 mt-4 rounded-md"
							href="/"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;

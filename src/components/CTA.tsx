import { Link } from "react-router-dom";
const CTA = () => {
	return (
		<section className="">
			<div className="px-8 py-20">
				<div className="grid  md:grid-cols-2">
					<div className="max-md:order-2">
						<div className="pt-24">
							<span className="">Reliable</span>
							<h2 className="CTA mt-4">Highly Redundant Servers With Backup</h2>
							<p className="CTA mt-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<Link
								to="/"
								className="inline-flex px-5 py-2 bg-purple-600 mt-4 rounded-md"
							>
								Learn More
							</Link>
						</div>
					</div>
					<div className="flex justify-center max-md:order-1">
						<img
							src="https://placehold.co/400?text=CTA&font=roboto"
							alt="Image CTA"
						/>
					</div>
				</div>
				<div className="grid mt-20 md:grid-cols-2">
					<div className="md:order-2 ">
						<div className="pt-24 ">
							<span className="">Reliable</span>
							<h2 className="CTA mt-4">Highly Redundant Servers With Backup</h2>
							<p className="CTA mt-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<Link
								to="/"
								className="inline-flex px-5 py-2 bg-purple-600 mt-4 rounded-md"
							>
								Learn More
							</Link>
						</div>
					</div>
					<div className="flex justify-center md:order-1">
						<img
							src="https://placehold.co/400?text=CTA&font=roboto"
							alt="Image CTA"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;

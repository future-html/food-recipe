import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
	const [openNavMenu, setOpenNavMenu] = React.useState(false);

	return (
		<div className="relative px-8">
			<header className="p-8 flex justify-between">
				<div className="flex items-center">
					<img
						src="https://placehold.co/40?text=Logo&font=roboto"
						alt="logo image"
					/>
					<h1 className="ml-2">Logo name</h1>
				</div>
				<div className="flex items-center">
					<ul className="hidden navbar lg:flex *:mx-2 *:flex *:items-center">
						<li>
							<Link
								to="/"
								className="primary"
							>
								Features
							</Link>
						</li>
						<li>
							<Link
								to="/pricing"
								className="primary"
							>
								Pricing
							</Link>
						</li>
						<li>
							<Link
								to="/login"
								className="primary"
							>
								Login
							</Link>
						</li>
						<li>
							<Link
								to="/signup"
								className="  rounded-md"
							>
								Sign up
							</Link>
						</li>
					</ul>
					<div className="lg:hidden">
						<RxHamburgerMenu
							className="text-[24px] cursor-pointer"
							onClick={() => {
								setOpenNavMenu(true);
							}}
						/>
					</div>
				</div>
			</header>

			<div
				className={`lg:hidden absolute top-8 bg-white   ${
					openNavMenu ? "opacity-100 animate-fadeinbounceleft" : "opacity-0 duration-300 -translate-x-full"
				} text-black`}
			>
				<div className="flex justify-end">
					<div></div>
					<div>
						<IoMdClose
							onClick={() => {
								setOpenNavMenu(false);
							}}
							className="text-[1.75rem] cursor-pointer "
						/>
					</div>
				</div>
				<ul className="block lg:hidden w-[calc(100vw-80px)]">
					<li className="">
						<Link
							to="/"
							className=" mobile-primary"
						>
							Features
						</Link>
					</li>
					<li>
						<Link
							to="/pricing"
							className="mobile-primary"
						>
							Pricing
						</Link>
					</li>
					<li>
						<Link
							to="/login"
							className="mobile-primary"
						>
							Login
						</Link>
					</li>
					<li className="flex justify-center">
						<Link to="/signup">Sign up</Link>
					</li>
				</ul>
			</div>

			<main className="flex flex-col lg:flex-row py-20 lg:justify-between">
				<div className="flex flex-col justify-center lg:items-start items-center">
					<h2 className="max-w-[48rem] ">High Performant Servers tailored to your needs</h2>
					<p className="max-w-[42rem]  mt-4 ">
						Our cloud provisions the best servers, with fast SSD, powerful Xeon Processors, whenever you need it.
						Oh, and we have 99.9% SLA
					</p>
					<Link
						to="/"
						className="mt-4"
					>
						Start Your 15 Days Free Trial
					</Link>
				</div>

				<div className="flex justify-center">
					<img
						src="https://placehold.co/557x524?text=Image+Hero&font=roboto"
						alt="image "
					/>
				</div>
			</main>
		</div>
	);
};

export default Navbar;

const Testimonial = () => {
	return (
		<section>
			<div className="px-8">
				<div className="py-20">
					<h2 className="w-full text-center">Affordable Pricing</h2>

					<p className="max-w-[36rem] mt-4 mx-auto text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</p>

					<div className="mt-10">
						<div className="py-12 px-6 md:py-20 bg-white text-black max-w-[768px] mx-auto md:px-16">
							<div>
								<svg
									viewBox="0 0 24 24"
									width={40}
									className="fill-purple-600/60"
								>
									<path
										fill="currentColor"
										d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
									></path>
								</svg>
								<h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, amet.</h4>
							</div>
							<div className="flex mt-4 flex-col md:flex-row  md:justify-between">
								<div className="flex items-center">
									<img
										src="https://placehold.co/60?text=profile&font=roboto"
										alt=""
										className="rounded-full"
									/>
									<div className="ml-2">
										<h5>Name Surname</h5>
										<p>Position</p>
									</div>
								</div>

								<div className="flex items-center max-md:justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="size-7 max-md:mt-4"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
										/>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="size-7 ml-[1rem] max-md:mt-4"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;

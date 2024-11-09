import { Link } from "react-router-dom";
const CardFeature = () => {
	return (
		<div className="each-card">
			<div>
				<div className="plan-mode">
					<div className="plan-mode-title">
						<span className="mode">Mode Name</span>
						<span className="">most popular</span>
					</div>
					<div className="plan-mode-sales">
						<span className="sale">Sales</span>
						<span className="">Price</span>
					</div>
					<div className="plan-mode-description">
						<span className="description">Description</span>
					</div>
				</div>

				<ul className="feature-have">
					<li className="flex items-center">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								stroke-width="2"
								className="size-7  fill-purple-600"
							>
								<path
									className="stroke-white"
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
						</div>
						<div className="feature-list">
							<span>2 Core Xeon CPU</span>
						</div>
					</li>
					<li className="flex items-center mt-6">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								stroke-width="2"
								className="size-7  fill-purple-600"
							>
								<path
									className="stroke-white"
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
						</div>
						<div className="feature-list">
							<span>2 Core Xeon CPU</span>
						</div>
					</li>
				</ul>

				<Link
					to="/"
					className="px-6 py-4 mt-4 flex w-full justify-center"
				>
					Create Server
				</Link>
			</div>
		</div>
	);
};

export default CardFeature;

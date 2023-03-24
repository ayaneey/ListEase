import React from "react";

function Services() {
	return (
		<div>
			<nav className="bg-gray-200 shadow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<h1 className="text-3xl font-bold text-gray-800 pl-0 py-2 rounded-lg">
							Services Overview
							<span className="bg-green-custom h-5 w-12 ml-4 inline-block"></span>
						</h1>
					</div>
				</div>
			</nav>
			<div
				className="flex justify-between bg-yellow rounded-lg shadow-lg p-8"
				style={{
					backgroundColor: "hsl(0, 28.571428571428513%, 97.25490196078431%)",
				}}
			>
				<div className="w-1/2 pr-2">
					<div className="flex justify-center mt-18">
						<img src="./services.svg" className="mt-8" />
					</div>
				</div>
				<div className="w-1/2 pl-2">
					<h1 className="text-4xl mb-4">Product Listing</h1>
					<p className="mb-8 text-left">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
						repudiandae sint, animi aspernatur fugit porro! Quaerat commodi
						nihil odio voluptatibus animi ea impedit nulla. Quo veritatis
						delectus ea facere nemo. Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Cupiditate repudiandae sint, animi aspernatur
						fugit porro! Quaerat commodi nihil odio voluptatibus animi ea
						impedit nulla. Quo veritatis delectus ea facere nemo.
					</p>
					<div className="flex justify-center">
						<button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-9 rounded mt-4">
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;

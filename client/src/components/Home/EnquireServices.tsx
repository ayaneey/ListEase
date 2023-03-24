import React from "react";

function EnquireServices() {
	return (
		<div>
			<div
				style={{
					backgroundColor: "hsl(0, 4.5454545454545245%, 91.37254901960785%)",
				}}
			>
				<div className="flex justify-center">
					<div className=" bg-white p-10 mt-8 mb-16 h-80 flex flex-col items-center justify-center w-1/3 rounded-3xl">
						<h1 className="text-center text-gray-400 text-2xl">
							feel at ease, as the app calculates the total cost of items for
							you automatically as you navigate
						</h1>
						<div className="mt-8">
							<button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
								Find out more
							</button>
						</div>
					</div>

					<img
						src="./cost.svg"
						alt="services"
						className="ml-10 w-2/5 h-64 mt-10"
					/>
				</div>
			</div>
		</div>
	);
}

export default EnquireServices;

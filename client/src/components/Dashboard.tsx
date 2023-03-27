import React from "react";
import Sidebar from "./Sidebar";

function Dashboard() {
	return (
		<div className="flex flex-col h-screen">
			<div className="flex-none h-16 bg-gray-800 text-white flex items-center justify-center text-2xl font-bold">
				Dashboard
			</div>
			<div className="flex-1 flex justify-center items-center">
				<div className="w-full md:w-2/3 lg:w-1/2">
					<table className="w-full table-auto">
						<thead>
							<tr>
								<th className="px-4 py-2">Title</th>
								<th className="px-4 py-2">Price</th>
								<th className="px-4 py-2">Info</th>
								<th className="px-4 py-2">Source</th>
								<th className="px-4 py-2"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="border px-4 py-2">Product 1</td>
								<td className="border px-4 py-2">$10</td>
								<td className="border px-4 py-2">Lorem ipsum dolor sit amet</td>
								<td className="border px-4 py-2">
									https://example.com/product1
								</td>
								<td className="border px-4 py-2">
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
										Modify
									</button>
								</td>
							</tr>
							<tr>
								<td className="border px-4 py-2">Product 2</td>
								<td className="border px-4 py-2">$20</td>
								<td className="border px-4 py-2">
									Consectetur adipiscing elit
								</td>
								<td className="border px-4 py-2">
									https://example.com/product2
								</td>
								<td className="border px-4 py-2">
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
										Modify
									</button>
								</td>
							</tr>
							<tr>
								<td className="border px-4 py-2">Product 3</td>
								<td className="border px-4 py-2">$30</td>
								<td className="border px-4 py-2">
									Sed do eiusmod tempor incididunt
								</td>
								<td className="border px-4 py-2">
									https://example.com/product3
								</td>
								<td className="border px-4 py-2">
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
										Modify
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;

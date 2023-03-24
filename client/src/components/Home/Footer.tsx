import React from "react";
import Image from "next/image";

function Footer() {
	return (
		<div>
			<div className="bg-white p-10 mt-8 mb-10 h-30 flex flex-col items-center justify-center w-1/3 rounded-3xl"></div>
			<footer className="bg-gray-100 py-4 border-t-2 border-gray-200">
				<nav className="flex justify-center">
					<Image src="./Logo.svg" width={120} height={100} alt="h" />
					<a href="#" className="mr-4 text-gray-700 hover:text-gray-900">
						Home
					</a>
					<a href="#" className="mr-4 text-gray-700 hover:text-gray-900">
						About Us
					</a>
					<a href="#" className="text-gray-700 hover:text-gray-900">
						Services
					</a>
				</nav>
			</footer>
		</div>
	);
}

export default Footer;

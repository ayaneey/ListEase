import React from "react";
import Link from "next/link";
import { FaHistory, FaUser, FaList } from "react-icons/fa";

function Sidebar() {
	return (
		<div className="flex flex-col h-screen w-56 px-4 py-8 bg-gray-800 text-white">
			<Link href="/dashboard">
				<div className="text-2xl font-bold mb-8 cursor-pointer">
					<img src="../Logo.svg" />
				</div>
			</Link>
			<div className="flex items-center mb-8">
				<FaHistory className="text-xl mr-2" />
				<span className="mr-2">History</span>
			</div>
			<div className="flex items-center mb-8">
				<FaUser className="text-xl mr-2" />
				<span className="mr-2">My Account</span>
			</div>
			<div className="flex items-center mb-8">
				<FaList className="text-xl mr-2" />
				<span className="mr-2">Create List</span>
			</div>
		</div>
	);
}

export default Sidebar;

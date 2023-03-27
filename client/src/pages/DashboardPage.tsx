import React from "react";
import Sidebar from "../components/Sidebar";

function DashboardPage() {
	return (
		<div className="flex h-screen">
			<Sidebar />
			<div className="flex-1 bg-white">{<h1>Hello world</h1>}</div>
		</div>
	);
}

export default DashboardPage;

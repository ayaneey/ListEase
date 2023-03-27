import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

function DashboardPage() {
	return (
		<div className="flex h-screen">
			<Sidebar />
			<div className="flex-1 bg-white">
				<Dashboard />
			</div>
		</div>
	);
}

export default DashboardPage;

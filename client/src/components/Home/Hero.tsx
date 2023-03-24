import React from "react";

function Hero() {
	return (
		<div
			className="flex flex-col md:flex-row justify-center items-center"
			style={{ marginTop: "2vh" }}
		>
			<div
				className="from-brand-primary opacity-60 to-white h-2/5 md:h-3/5 w-full md:w-3/5 bg-gradient-to-b flex justify-center items-center"
				style={{
					borderRadius: "40px",
					margin: "0 2%",
					marginTop: "5vh",
					height: "60vh",
					minHeight: "30vh",
					marginBottom: "5vh",
				}}
			>
				<div
					className="bg-white rounded-xl h-3/5 w-3/4 md:h-3/5 md:w-3/4 flex flex-col justify-center items-center"
					style={{ borderRadius: "40px", minHeight: "20vh" }}
				>
					<h1 className="text-xl md:text-4xl font-poppins text-black text-center sm:text-2xl">
						Keep track of
						<br />
						your expenses and
						<br />
						budget with ease
					</h1>
					<button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-9 rounded mt-4">
						Get Started
					</button>
				</div>
			</div>

			<div
				style={{
					margin: "2vh 2%",
					marginTop: "2vh",
					height: "60vh",
					minHeight: "30vh",
				}}
			>
				<img src="/calendar.svg" alt="calendar" style={{ maxWidth: "100%" }} />
			</div>
		</div>
	);
}

export default Hero;

import { Raleway, IBM_Plex_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Open_Sans, Roboto, Poppins } from "@next/font/google";


import { useState } from "react";
const openSans = Open_Sans({
	weight: ["300", "400"],
	subsets: ["latin"],
	style: ["normal"],
});

const roboto = Roboto({
	weight: ["400"],
	subsets: ["latin"],
	style: ["normal"],
});
const poppins = Poppins({
	weight: ["300", "400"],
	subsets: ["latin"],
	style: ["normal"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				:root {
					--openSans-font: ${openSans.style.fontFamily};
					--roboto-font: ${roboto.style.fontFamily};
					--poppins-font: ${poppins.style.fontFamily};
				}
			`}</style>

			<Component {...pageProps} />
		</>
	);
}

import Image from "next/image";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"

function Navbar() {
	const [nav, setNav] = useState(false)
	return (
		<div className="  min-w-fit h-max p-5 flex justify-between bg-brand-base/10  border border-brand-secondary border-opacity-5 md:items-center">
			<div className=" w-1/2 h-max" >
				<Image src="./Logo.svg" width={120} height={100} alt="h" />
			</div>
			<div className="w-3/4 hidden md:flex    gap-10 items-center">
				<p className=" text-brand-secondary font-roboto font-bold text-lg">About</p>
				<p className=" text-brand-secondary font-roboto font-bold text-lg">Features</p>
				<button className=" font-roboto font-bold text-lg bg-brand-secondary px-5 py-1  text-white rounded-sm">Log in</button>
			</div>
			<div className=" w-full   h-max justify-end   flex md:hidden cursor-pointer">
				<MenuIcon onClick={()=>setNav(true)} />
				{nav && <div className="  w-full h-max p-5 absolute bg-brand-secondary flex  flex-col  right-0 top-0">
					<p className="   text-brand-base font-roboto font-bold   self-end cursor-pointer"><CloseIcon  onClick={()=>setNav(false)}/></p>
					<div className=" flex flex-col gap-2">
						<p className=" text-brand-base font-roboto font-bold text-lg">About</p>
						<p className="text-brand-base  font-roboto font-bold text-lg">Features</p>
						<button className="  w-1/2 font-roboto font-bold text-lg  t text-brand-secondary  px-5 py-1 bg-brand-base rounded-sm">Log in</button>
					</div>

				</div>}

			</div>


		</div>

	);
}

export default Navbar;

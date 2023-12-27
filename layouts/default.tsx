import {Navbar} from "@/components/navbar";
import {Head} from "./head";
import Footer from "@/components/footer";
import {Spacer} from "@nextui-org/react";
import React from "react";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen" >
			<Head/>
			<Navbar/>
			<Spacer y={14}/>
			<main className="container mx-auto max-w-7xl px-6 flex-grow">
				{children}
			</main>
			<Footer/>
		</div>
	);
}

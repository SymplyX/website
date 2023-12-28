import {Navbar} from "@/components/navbar";
import {Head} from "./head";
import Footer from "@/components/footer";
import {Image, Spacer} from "@nextui-org/react";
import React from "react";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col min-h-screen overflow-hidden">
			<div className="absolute inset-0 overflow-hidden opacity-50">
				<Image
					src="/hero.png"
					alt="Hero Background"
					className="object-cover object-center w-full h-full md:object-contain md:object-center"
				/>
			</div>

			<div className="relative z-10 flex-grow overflow-y-auto">
				<Head/>
				<Navbar/>
				<main className="container mx-auto max-w-7xl px-6">
					{children}
				</main>
				<Spacer y={96}/>
				<Footer/>
			</div>
		</div>
	);
}

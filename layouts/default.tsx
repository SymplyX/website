import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import Footer from "@/components/footer";
import { Image, Spacer } from "@nextui-org/react";
import React from "react";

export default function DefaultLayout({
										  children,
									  }: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col min-h-screen overflow-hidden">
			<div className="relative z-10 flex-grow overflow-y-auto h-full">
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'url(/hero.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
				<Head />
				<Navbar />
				<main className="container mx-auto px-4 sm:px-6 lg:px-8">
					{children}
				</main>
				<Spacer y={ 96 } />
			</div>
			<Footer />
		</div>
	);
}

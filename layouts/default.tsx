import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import {FaHeart} from "react-icons/fa";
import Footer from "@/components/footer";
import {Spacer} from "@nextui-org/react";
import React from "react";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<Spacer y={14} />
			<main className="container mx-auto max-w-7xl px-6 flex-grow">
				{children}
			</main>
			<Footer />
		</div>
	);
}

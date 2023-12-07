import DefaultLayout from "@/layouts/default";
import HeroHome from "@/components/home/HeroHome";
import {Spacer} from "@nextui-org/react";
import React from "react";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<HeroHome />
			<Spacer y={44} />
		</DefaultLayout>
	);
}

import DefaultLayout from "@/layouts/default";
import HeroHome from "@/components/home/HeroHome";
import {Spacer} from "@nextui-org/react";
import React from "react";
import {GetStaticPropsContext} from "next";

export default function IndexPage() {

	return (
		<DefaultLayout>
			<HeroHome />
			<Spacer y={44} />
		</DefaultLayout>
	);
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const locale = context.locale || context.defaultLocale;
	const messages = require(`../lang/${locale}.json`);

	return {
		props: {
			messages
		}
	};
}

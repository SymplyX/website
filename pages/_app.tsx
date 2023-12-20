import type {AppProps} from "next/app";

import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {fontPoppins} from "@/config/fonts";
import {useRouter} from 'next/router';
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider attribute="class" defaultTheme="dark">
				<Component {...pageProps} />
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export const fonts = {
	sans: fontPoppins.style.fontFamily
};

import type {AppProps} from "next/app";

import {NextUIProvider} from "@nextui-org/react";
import {NextIntlClientProvider} from 'next-intl';
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {fontPoppins} from "@/config/fonts";
import {useRouter} from 'next/router';
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider attribute="class" defaultTheme="dark">
				<NextIntlClientProvider
					locale={router.locale}
					timeZone="Europe/Vienna"
					messages={pageProps.messages}
				>
					<Component {...pageProps} />
				</NextIntlClientProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export const fonts = {
	sans: fontPoppins.style.fontFamily
};

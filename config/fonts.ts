import {Fira_Code as FontMono, Poppins} from "next/font/google"

export const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: "--font-poppins",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

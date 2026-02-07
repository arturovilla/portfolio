import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { GeistPixelSquare, GeistPixelGrid, GeistPixelCircle, GeistPixelTriangle, GeistPixelLine } from 'geist/font/pixel';

const Druk = localFont({
	src: "..//public/fonts/Druk_Wide_Bold.ttf",
	variable: "--font-Druk-bold",
});

export default function App({ Component, pageProps }) {
	return (
    <main className={`${GeistSans.variable}
		${GeistMono.variable}
		${GeistPixelSquare.variable}
		${GeistPixelGrid.variable}
		${GeistPixelCircle.variable}
		${GeistPixelTriangle.variable}
		${GeistPixelLine.variable} min-h-screen font-sans`} >
			<Navbar />
			<Component {...pageProps} />
			<Analytics />
			<Footer />
		</main>
	);
}

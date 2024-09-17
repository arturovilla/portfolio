import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const Druk = localFont({
	src: "..//public/fonts/Druk_Wide_Bold.ttf",
	variable: "--font-Druk-bold",
});

export default function App({ Component, pageProps }) {
	return (
		<main className="min-h-screen" >
			<Navbar />
			<Component {...pageProps} />
			<Analytics />
			<Footer />
		</main>
	);
}

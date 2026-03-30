import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { GeistPixelSquare, GeistPixelGrid, GeistPixelCircle, GeistPixelTriangle, GeistPixelLine } from 'geist/font/pixel';
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const Druk = localFont({
	src: "..//public/fonts/Druk_Wide_Bold.ttf",
	variable: "--font-Druk-bold",
});

export default function App({ Component, pageProps }) {
	const router = useRouter();

	return (
    <main className={`${GeistSans.variable}
		${GeistMono.variable}
		${GeistPixelSquare.variable}
		${GeistPixelGrid.variable}
		${GeistPixelCircle.variable}
		${GeistPixelTriangle.variable}
		${GeistPixelLine.variable} min-h-screen font-sans`} >
			<Navbar />
			<AnimatePresence mode="wait">
				<motion.div
					key={router.asPath}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
			<Analytics />
			<Footer />
		</main>
	);
}

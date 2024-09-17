import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="flex flex-col">
			<div className="mt-64">
				<About />
			</div>
		</div>
	);
}

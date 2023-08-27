import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="">
			<div className="mt-64">
				<About />
			</div>

			<div className="mt-96 flex justify-center flex-col items-center ">
				<Newsletter />
			</div>
		</div>
	);
}

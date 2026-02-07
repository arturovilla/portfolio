import React from "react";
import Link from "next/link";
import StrangeAttractorBackground from "@/components/StrangeAttractorBackground";

function About() {
	return (
		<div className="relative font-gp-line text-gruvred">
			{/* Three.js Background */}
			<StrangeAttractorBackground />

			{/* Readability overlay */}
			<div className="fixed inset-0 bg-[#0C0D1C]/60 backdrop-blur-sm -z-0 pointer-events-none" />

			{/* Content */}
			<div className="relative z-10">
				{/* Header */}
				<div className="flex flex-col">
					<h1 className="font-gp-line text-left pl-5 pr-5 md:text-8xl md:pl-11 text-6xl">
						Hello, I&apos;m
					</h1>
					<span className="font-gp-line text-left pl-5 pr-5 md:text-8xl md:pl-11 text-6xl">
						Arturo Villalobos
					</span>
				</div>

				{/* Resume Snapshot Card */}
				<div className="font-gp-line pl-5 pr-5 md:pl-11 pt-8">
					<div className="border border-gruvpink rounded-md p-4 md:p-6 max-w-4xl bg-[#0C0D1C]/70 backdrop-blur">
						{/* Top line */}
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
							<div className="font-gp-square text-gruvgreen text-lg md:text-2xl">
								Senior Software Engineer{" "}
								<span className="text-gruvtan">@</span>{" "}
								<a
									href="https://standarddata.ai/en/welcome-to-standarddata"
									target="_blank"
									rel="noreferrer"
									className="text-gruvpink hover:text-gray-100 transition-all"
								>
									StandardData&#8599;
								</a>
								<span className="text-gruvtan"> • Houston, TX</span>
							</div>

							<div className="flex gap-3">
								<Link
									href="/resume"
									className="text-sm md:text-base py-1 px-4 rounded-md border border-gruvpink text-gruvpink hover:bg-gruvpink hover:text-[#0C0D1C] transition"
								>
									View Resume
								</Link>
								<a
									href="/ArturoVillalobosResume.pdf"
									className="text-sm md:text-base py-1 px-4 rounded-md border border-gruvgreen text-gruvgreen hover:bg-gruvgreen hover:text-[#0C0D1C] transition"
								>
									Download PDF
								</a>
							</div>
						</div>

						<hr className="border-gruvpink/60 my-5" />

						{/* Skills */}
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<h2 className="font-gp-square text-gruvtan text-sm tracking-wide">
									CORE STACK
								</h2>
								<p className="mt-2 text-gruvgreen text-sm md:text-base">
									Java, Python, C#, TypeScript, SQL, Docker, Ansible, Azure DevOps
								</p>
							</div>
							<div>
								<h2 className="font-gp-square text-gruvtan text-sm tracking-wide">
									FOCUS AREAS
								</h2>
								<p className="mt-2 text-gruvgreen text-sm md:text-base">
									Data proccesing at scale, Backend Engineering, CI/CD automation,
									customer-facing delivery, performance + reliability
								</p>
							</div>
						</div>

						<hr className="border-gruvpink/60 my-5" />

						{/* Highlights */}
						<div>
							<h2 className="font-gp-square text-gruvtan text-sm tracking-wide">
								RECENT HIGHLIGHTS
							</h2>
              <ul className="mt-3 list-disc pl-6 text-gruvtan text-sm md:text-base space-y-2">
                <li>
                  Release a new series on on strange attractors that you can view <a
                  href="https://www.reddit.com/r/TouchDesigner/comments/1qtr5wp/attractor_series/"
									target="_blank"
									rel="noreferrer"
									className="text-gruvpink hover:text-gray-100 transition-all">here</a>.
                  Built with TouchDesigner, this series explores the beauty within math and chaos theory.
								</li>
								<li>
									Built backend micro-services providing machine learing enhanced
									faliure predictions that reduced readiness report prep time by
									~40% across multiple bases.
								</li>
								<li>
									Delivered a secure data proccesing tool to ingest and refresh
									large datasets for demos and production use in U.S Army and
									National Guard bases across the nation.
								</li>
								<li>
									Worked directly with stakeholders to demo, deploy, and support
									systems with high reliability expectations.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;

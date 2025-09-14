import React from "react";
import useDownloader from "react-use-downloader";

function Resume() {
	const { download } = useDownloader();
	const fileUrl = "/ArturoVillalobosResume.pdf";
	const filename = "arturo_villalobos_resume.pdf";

	return (
		<div className="flex justify-center text-center mt-32 mb-48 text-[#E4DFDB]">
			<div className=" font-serif flex-col items-center w-11/12 md:w-4/5 max-w-5xl">
				<div className="mb-5 font-sans">
					<button
						onClick={() => download(fileUrl, filename)}
						className=" text-lg py-1 px-5 text-gruvpink rounded-md border border-gruvpink hover:bg-gruvpink hover:text-[#0C0D1C]  transition duration-150 ease-in-out"
					>
						Download PDF
					</button>
				</div>

				<div className="border border-gruvpink px-3 py-2 rounded-md">
					{/* /////////////////////////////////////////////// */}
					<h1 className=" text-4xl font-bold">
						Arturo Villalobos Jr
					</h1>
					<p className="text-xs pt-3 pb-2">
						<a href="mailto:artuvillam@gmail.com" className="text-gruvpink hover:text-gruvtan transition ease-in-out">artuvillam@gmail.com</a> |
						<a href="https://www.linkedin.com/in/rtvro/" target="_blank" className="text-gruvpink hover:text-gruvtan transition ease-in-out"> https://www.linkedin.com/in/rtvro/</a> |
						<a href="https://github.com/arturovilla" target="_blank" className="text-gruvpink hover:text-gruvtan transition ease-in-out"> https://github.com/arturovilla</a> |
						<a href="https://www.rtvro.dev" target="_blank" className="text-gruvpink hover:text-gruvtan transition ease-in-out"> rtvro.dev</a>
					</p>
					<hr className="" />

					{/* /////////////////////////////////////////////// */}
					<h2 className="font-semibold pt-3">
						SKILLS AND CERTIFICATIONS
					</h2>
					<div className="text-left pb-2">
						<ul className="list-disc pl-6">
							<li>
								Java, Python 3+, C#, Javascript, HTML/CSS, Php, Rstats, C++.
							</li>
							<li>
								MSSQL/SQL, MongoDB, Redis, NoSQL, AWS/Azure, Docker, Ansible.
							</li>
							<li>
								Platforms and Tools: Teams, Slack, Jira, Azure DevOps, VScode, Xcode, JetBrains Products
							</li>
							<li>
								Languages: English-Native, Spanish-Native,
								Portuguese-Beginner
							</li>
						</ul>
					</div>
					<hr className="" />

					{/* /////////////////////////////////////////////// */}
					<h2 className="font-semibold pt-3">EDUCATION</h2>
					<div className="pb-2">
						<div className="flex justify-between font-medium text-md">
							<h3>Texas A&M University</h3>
							<h3>College Station, TX</h3>
						</div>
						<div className="flex justify-between  text-sm">
							<h3 className="text-left">
								Bachelor of Arts Computer Science
								<br />
								Minor in Statistics
							</h3>
							<h3>Graduated Dec 2022</h3>
						</div>
					</div>
					<hr className="" />

					{/* /////////////////////////////////////////////// */}
					<h2 className="font-semibold pt-3">WORK EXPERIENCE</h2>
					<div className=" pb-2">
						<div className="flex justify-between font-medium text-md">
							<h3><span className="text-gruvpink">Senior Software Engineer</span>, <a href="https://standarddata.ai" className="text-gruvgreen hover:text-gruvtan transition ease-in-out">Standard Data, Inc.</a> Houston, TX.</h3>
							<h3> Aug 2023 - Present</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
						      Reduced the time soldiers and airmen spent preparing readiness reports by 40% in airbases across the United States through developing micro-services with Java Spring Boot, TypeScript, MongoDB, and Microsoft SQL Server.
									These services provided machine learning driven maintenance calculations that power a suite of tools automating critical operational tasks.
								</li>
								<li>
						      Led CI/CD initiatives with Azure Pipelines, Ansible, and Docker to automate and integrate front-end and back-end deployments, accelerating prototype delivery.
									This speed enabled more detailed RFI responses to GSA schedule notices and facilitated faster client feedback.
								</li>
								<li>
						      Partnered with project stakeholders to define requirements, conduct demonstrations, and deploy live versions of projects to various customers nationwide, ensuring alignment with strategic objectives and operational readiness.
								</li>
								<li>
								  Developed and maintained a data synchronization tool using C#, Ansible, and Docker to securely ingest hundreds of gigabytes of sensitive customer data.
									This tool ensured up-to-date application data for live demonstrations and drove greater customer adoption.
								</li>
								<li>
						      Adapted quickly to organizational needs by learning Java to support a major architectural shift.
									Partnered with two backend engineers to transition from a micro-services stack (Python, Redis, MongoDB, Java) to a monolithic design, delivering a beta in three months and live-user testing in six.
								</li>
								<li>
						      Engineered PHP micro-services and migrated backend storage from MongoDB to Elastic search, boosting time-series query performance and retaining full data resolution.
									The redesign reduced infrastructure costs by $50,000 per year.
								</li>
							</ul>
						</div>
						<div className="flex justify-between font-medium text-md">
							<h3>
								<span className="text-gruvpink">Software Developer</span>, <a href="https://cccliftbags.com/?srsltid=AfmBOorqJGVz8F6bR0FzA4TqpL1TYKh3EKgYAaQy7UDTorDUoeuys77z" className="text-gruvgreen hover:text-gruvtan transition ease-in-out">Classic Canvas Company</a>, San
								Antonio, TX.
							</h3>
							<h3>Feb 2023 - June 2023</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
						      Increased the efficiency of current customer outreach efforts by automating email marketing and creating a tool that can schedule and automatically post social media content.
								</li>
								<li>
								  Deployed and configured a self-hosted accounting, invoicing, and expenses platform using Docker and PostgreSQL, with custom features such as company-specific branding, data views, and reporting. The solution eliminated QuickBooks subscriptions, saving over $4,000 annually.
								</li>
							</ul>
						</div>

						<div className="flex justify-between font-medium text-md">
							<h3>
								<span className="text-gruvpink">Cloud Solutions Architect Internship</span>, <a href="https://universitylands.utsystem.edu" className="text-gruvgreen hover:text-gruvtan transition ease-in-out">University Lands</a>, Houston, TX
							</h3>
							<h3>May 2020 - Aug 2020</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
    						  Automated ETL workflows for Drilling and Completion reports in the Permian Basin by developing server-less Python Lambda functions on AWS.
                  The solution streamlined integration of critical oil well data and saved engineers significant time previously spent on manual data entry.
								</li>
								<li>
								  Collaborated with mechanical and petroleum engineers to design Python notebook templates that streamlined type curve creation and well cost analysis,
										improving data-driven decision-making and accelerating engineering and financial evaluations.
								</li>
							</ul>
						</div>

						<div className="flex justify-between font-medium text-md">
							<h3>
								<span className="text-gruvpink">Peer Teacher</span>, <a href="https://engineering.tamu.edu/index.html" className="text-gruvgreen hover:text-gruvtan transition ease-in-out">Texas A&M College of Engineering</a>,
								College Station, TX.
							</h3>
							<h3>Aug 2020 - Dec 2021</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
								  Provided individualized support for over 70 undergraduate and graduate students through weekly 3-hour long office hours conducted both in-person and online.
								</li>
								<li>
								  Supported instruction across five courses (Data Structures & Algorithms, Introduction to Computing, Computer Organization, Discrete Mathematics, and Linear Algebra)
								  by reviewing materials and grading assignments, ensuring consistency and up-to-date academic resources.
								</li>
							</ul>
						</div>
					</div>
					<hr className="" />

					{/* /////////////////////////////////////////////// */}
					<h2 className="font-semibold pt-3">PROJECTS</h2>
					<div className="pb-2">
						<div className="flex justify-between font-medium text-md">
							<h3><span className="text-gruvpink">Creative Developer</span>, <a href="https://www.artclubhtx.com" className="text-gruvgreen hover:text-gruvtan transition ease-in-out">Art Club</a>, Houston, TX</h3>
							<h3>Dec 2024 - Present</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
    						  Created immersive real-time 3D installations with TouchDesigner, Blender, and mathematical modeling, enhancing weekly live shows and permanent exhibits experienced by over 300 patrons per day.
								</li>
								<li>
						      Maintain and repair over dozen high-performance servers powering real-time visualizations and gallery-wide installations, ensuring reliability and minimal downtime.
								</li>
							</ul>
						</div>
					</div>
					{/* ///////////////////////////////////////////// */}
				</div>
			</div>
		</div>
	);
}

export default Resume;

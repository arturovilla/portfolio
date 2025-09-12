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
					<h2 className="font-semibold pt-3">WORK EXPERIENCE</h2>
					<div className=" pb-2">
						<div className="flex justify-between font-medium text-md">
							<h3><span className="text-gruvpink">Senior Software Engineer</span>, <a href="https://standarddata.ai" className="text-gruvgreen hover:text-gruvtan transition ease-in-out">Standard Data, Inc.</a> Houston, TX.</h3>
							<h3> Aug 2023 - Present</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
								  Develop and deploy micro-services using Java Spring Boot, TypeScript, MongoDB, and Microsoft SQL Server to deliver machine learning–driven maintenance calculations, ensuring seamless integration across military and industrial systems with diverse performance and scalability requirements.
								</li>
								<li>
								  Lead CI/CD implementation using Azure Pipelines, Ansible, and Docker to automate and integrate front-end and back-end deployments, streamlining project delivery.
								</li>
								<li>
								  Partner with project stakeholders to define requirements, conduct demonstrations, and deploy live versions of projects to various customers nationwide, ensuring alignment with strategic objectives and operational readiness.
								</li>
								<li>
									Develop and maintain a critical deployment and data synchronization tool using C#, Ansible, and Docker, essential for live demonstrations and ensuring up-to-date application data, driving greater customer adoption.
								</li>
								<li>
								  Adapt quickly to organizational needs: originally hired as a Python developer, learn Java to support a major architectural shift; collaborate as one of three backend engineers to transition from micro-services (Python, Redis, MongoDB, Java) to a monolithic design, successfully delivering a beta test within six months.
								</li>
								<li>
								  Develop PHP micro-services for an automotive sensor manufacturer and re-architect the backend to transition from MongoDB to Elastic-search, centralizing data storage and optimizing time-series query performance.
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
								  Developed internal automation tools and a web interface using React, Python, and AWS to boost social media presence and activity. These tools will streamline marketing efforts, allowing for increased engagement and reach without the need for additional marketing resources.
								</li>
								<li>
								  Created and delivered comprehensive documentation detailing the tools used, specific system design decisions, and other relevant information. This documentation will serve as a valuable resource for current and future team members, ensuring transparency, consistency, and ease of knowledge transfer within the organization.
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
								  Developed server-less Lambda functions in Python on the AWS cloud to automate the ETL (Extract, Transform, Load) processes for data from Drilling and Completion reports in the Permian Basin. This solution enhances data processing efficiency, scalability, and accuracy, streamlining the integration of critical oil well data into the system.
								</li>
								<li>
								  Designed and developed a cloud architecture utilized by chemical and mechanical engineers to construct type curves and facilitate cost analysis of current wells. This architecture supports advanced data analysis and decision-making processes, enhancing the efficiency and accuracy of engineering evaluations and financial assessments.
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
									Tutored undergraduate and graduate students enrolled in Computer Science and Engineering courses, providing guidance and support both remotely and in-person.
									This includes helping students understand complex concepts, improve their problem-solving skills, and succeed academically through personalized instruction and mentorship.
								</li>
								<li>
									Taught courses including Data Structures and Algorithms, Introduction to Computing, Computer Organization, Discrete Mathematics, and Linear Algebra under the supervision of a professor.
									This involved preparing lectures, grading assignments, and offering individualized support to enhance students&apos; understanding and performance in these subjects.
								</li>
							</ul>
						</div>
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
					<h2 className="font-semibold pt-3">PROJECTS</h2>
					<div className="pb-2">
						<div className="flex justify-between font-medium text-md">
							<h3><span className="text-gruvpink">Creative Developer</span>, <a href="https://www.artclubhtx.com" className="text-gruvgreen hover:text-gruvtan transition ease-in-out">Art Club</a>, Houston, TX</h3>
							<h3>Dec 2024 - Present</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
								  Design and build custom real-time 3D art installations for music artists, leveraging TouchDesigner, Blender, and advanced mathematical techniques to deliver dynamic visuals for weekly live performances. These interactive visual systems enhance audience engagement and adapt seamlessly to diverse performance environments.
								</li>
								<li>
								  Maintain and repair high-performance servers powering real-time visualizations and gallery-wide installations, ensuring reliability and minimal downtime.
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

import React from "react";
import useDownloader from "react-use-downloader";

function Resume() {
	const { download } = useDownloader();
	const fileUrl = "/arturoresume.pdf";
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
						<a href="https://arturovillalobos.dev" target="_blank" className="text-gruvpink hover:text-gruvtan transition ease-in-out"> arturovillalobos.dev</a>
					</p>
					<hr className="" />

					{/* /////////////////////////////////////////////// */}
					<h2 className="font-semibold pt-3">
						SKILLS AND CERTIFICATIONS
					</h2>
					<div className="text-left pb-2">
						<ul className="list-disc pl-6">
							<li>
								Java, Python 3+, Javascript, HTML/CSS, Rstats, C++.
							</li>
							<li>
								MSSQL/SQL, MongoDB, Redis, NoSQL, AWS/Azure, Docker, Ansible.
							</li>
							<li>
								Platforms and Tools: Git Version Control, VScode, Xcode, Unreal Engine 4, Blender
							</li>
							<li>
								AWS Certified Cloud Practitioner Certification | Issued June 2020- Expires June 2023
							</li>
							<li>
								Languages: English-Native, Spanish-Native,
								Portuguese-Beginner
							</li>
						</ul>
					</div>
					<hr className="" />
					<div className="text-left pb-2">
						<ul className="list-disc pl-6">
							<li>
								Java, Python 3+, Javascript, HTML/CSS, Rstats, C++.
							</li>
							<li>
								MSSQL/SQL, MongoDB, Redis, NoSQL, AWS/Azure, Docker, Ansible.
							</li>
							<li>
								Platforms and Tools: Git Version Control, VScode, Xcode, Unreal Engine 4, Blender
							</li>
							<li>
								AWS Certified Cloud Practitioner Certification | Issued June 2020- Expires June 2023
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
							<h3><span className="text-gruvpink">Data Infrastructure Engineer</span>, Standard Data Inc.</h3>
							<h3> Aug 2023 - Present</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
									Engineered and implemented micro-services for ML-enhanced maintenance calculations in military and industrial applications, 
									seamlessly integrating diverse environments and technologies to optimize performance and scalability.
								</li>
								<li>
									Lead the CI/CD initiatives for comprehensive project deployment, orchestrating front-end and back-end integration using Azure Pipelines, 
									Ansible, and Docker to ensure seamless and efficient delivery.
								</li>
								<li>
									Partnered with project stakeholders to define requirements, conduct demonstrations, 
									and deploy live versions of projects to Air Force bases nationwide, ensuring alignment with strategic objectives and operational readiness.
								</li>
							</ul>
						</div>
						<div className="flex justify-between font-medium text-md">
							<h3><span className="text-gruvpink">Web Developer</span>, Blyss Dating (Remote)</h3>
							<h3> Mar 2023 - July 2023</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
									Develop and deploy a maintainable, and user-friendly business website leveraging modern technologies such as React/Next.js, Tailwind CSS, and AWS. 
									This includes designing intuitive user interfaces, ensuring responsive performance, and implementing best practices.
								</li>
								<li>
									Integrate a headless content management system (CMS) using GraphQL to empower the Blyss newsroom and blog capabilities. 
									This integration enables team members to seamlessly add and manage content, ensuring a flexible and efficient content delivery system that enhances the overall workflow.
								</li>
							</ul>
						</div>

						<div className="flex justify-between font-medium text-md">
							<h3>
								<span className="text-gruvpink">Software Developer</span>, Classic Canvas Company, San
								Antonio, TX.
							</h3>
							<h3>Feb 2023 - June 2023</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
									Develop internal automation tools and a web interface using React, Python, and AWS to boost social media presence and activity. 
									These tools will streamline marketing efforts, allowing for increased engagement and reach without the need for additional marketing resources.
								</li>
								<li>
									Create and maintain comprehensive documentation detailing the tools used, specific system design decisions, and other relevant information. 
									This documentation will serve as a valuable resource for current and future team members, ensuring transparency, consistency, and ease of knowledge transfer within the organization.
								</li>
							</ul>
						</div>

						<div className="flex justify-between font-medium text-md">
							<h3>
								<span className="text-gruvpink">Cloud Solutions Architect Internship</span>, University
								Lands, Houston, TX
							</h3>
							<h3>May 2020 - Aug 2020</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
									Develop and deploy server-less Lambda functions in Python on the AWS cloud to automate the ETL (Extract, Transform, Load) processes for data from Drilling and Completion reports in the Permian Basin. 
									This solution enhances data processing efficiency, scalability, and accuracy, streamlining the integration of critical oil well data into the system.
								</li>
								<li>
									Design and implement architecture utilized by chemical and mechanical engineers to construct type curves and facilitate cost analysis of current wells. 
									This architecture supports advanced data analysis and decision-making processes, enhancing the efficiency and accuracy of engineering evaluations and financial assessments. 
								</li>
							</ul>
						</div>

						<div className="flex justify-between font-medium text-md">
							<h3>
								<span className="text-gruvpink">Peer Teacher</span>, Texas A&M College of Engineering,
								College Station, TX.
							</h3>
							<h3>Aug 2020 - Dec 2021</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
									Tutor undergraduate and graduate students enrolled in Computer Science and Engineering courses, providing guidance and support both remotely and in-person. 
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
							<h3>Juego - Lead Developer - React Web App</h3>
							<h3>Nov 2021- Dec 2021</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
									Led a team of developers to launch a social
									network platform that connected users with
									similar interests with respect to video
									games and other media using a PostgreSQL
									database, React framework, and Node.JS
									backend.
								</li>
								<li>
									Using an agile development methodology I set
									targets, tracked progress, and delivered our
									working product.
								</li>
							</ul>
						</div>

						<div className="flex justify-between font-medium text-md">
							<h3>
								Olympic Index - Co-Developer - Design Project{" "}
							</h3>
							<h3>Sep 2021 - Dec 2021</h3>
						</div>
						<div className="text-left pb-2 text-sm w-10/12">
							<ul class="list-disc pl-6">
								<li>
									Developed a responsive, design focused, data
									visualization project with React.js, D3.js,
									and Python to explore historical olympic
									data with a variety of charts, each
									highlighting different aspects of the data
									to reveal underlying and interesting
									patterns.
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

import React from "react";

const languages = [
	{
		name: "Java",
		tooltip:
			"Primary backend language at Standard Data. Built Spring Boot services for maintenance calculations and reporting.",
	},
	{
		name: "Python 3+",
		tooltip:
			"Used for AWS Lambda ETL pipelines and data analysis notebooks during cloud architecture work.",
	},
	{
		name: "C#",
		tooltip:
			"Built secure data sync tools and background workers for large-file ingestion pipelines.",
	},
	{
		name: "TypeScript",
		tooltip:
			"Developed frontend services and internal tooling alongside Java backends.",
  },
  {
    name: "JavaScript",
    tooltip: "Developed frontend services and internal tooling alongside Java backends."
  },
  {
    name: "HTML/CSS",
    tooltip: "Developed various sites including ths one with Tailwind css utility classes"
  },
  {
    name: "PHP",
    tooltip: "Worked on a variety of PHP microservices processing and serving real-time sensor data from a fleet of vehicles "
  },
  {
    name: "R",
    tooltip: "Have worked several medium size R projects including creating documentation for one undergraduate professor"
  },
  {
    name: "C++",
    tooltip: "Currently work with C++ to create custom components for the TouchDesigner platform proccessing and visualizing real-time 3D graphics."
  },
];

function SectionTitle({ id, children }) {
	return (
		<div id={id} className="scroll-mt-28">
			<h2 className="font-gp-square text-gruvtan tracking-wide text-sm md:text-base">
				{children}
			</h2>
		</div>
	);
}

function Card({ children }) {
	return (
		<div className="border border-gruvpink/70 rounded-l bg-[#0C0D1C]/30 backdrop-blur px-4 py-1 md:px-6 md:py-6">
			{children}
		</div>
	);
}

function Chip({ children, tooltip }) {
	return (
		<span className="relative inline-flex group">
			<span className="inline-flex items-center rounded-sm border border-gruvgreen/60 bg-[#2F3B13]/40 px-3 py-1 text-xs md:text-sm text-gruvgreen cursor-default">
				{children}
			</span>

			{tooltip && (
				<span
					className="
						pointer-events-none absolute z-50
						left-1/2 top-full mt-2 w-64 -translate-x-1/2
						rounded border border-gruvpink/40
						bg-[#0C0D1C]/95 backdrop-blur
						px-3 py-2 text-xs text-gruvtan
						opacity-0 scale-95
						transition-all duration-150 ease-out
						group-hover:opacity-100 group-hover:scale-100
					"
				>
					{tooltip}
				</span>
			)}
		</span>
	);
}

function RoleHeader({ title, companyName, companyUrl, location, dates }) {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
				<h3 className="font-semibold text-gruvtan">
					<span className="text-gruvpink">{title}</span>,{" "}
					<a
						href={companyUrl}
						target="_blank"
						rel="noreferrer"
						className="text-gruvgreen hover:text-gruvtan transition ease-in-out"
					>
						{companyName}
					</a>{" "}
					<span className="text-gruvtan/80">{location}</span>
				</h3>
				<span className="text-gruvtan/70 text-sm">{dates}</span>
			</div>
		</div>
	);
}

function Resume() {
	return (
		<div className="text-[#E4DFDB]">
			<div className="font-gp-line mx-auto max-w-6xl px-4 md:px-6 pt-10 md:pt-14 pb-24">
				<main id="top" className="space-y-6">
					<Card>
						<div className="flex flex-col gap-3">
							<h1 className="font-gp-line text-3xl md:text-5xl">
								Arturo Villalobos Jr
							</h1>

							<div className="text-xs md:text-sm text-gruvtan/80 flex flex-wrap gap-x-3 gap-y-2">
								<a
									href="mailto:artuvillam@gmail.com"
									className="text-gruvpink hover:text-gruvtan transition"
								>
									artuvillam@gmail.com
								</a>
								<span className="text-gruvtan/40">|</span>
								<a
									href="https://www.linkedin.com/in/rtvro/"
									target="_blank"
									rel="noreferrer"
									className="text-gruvpink hover:text-gruvtan transition"
								>
									LinkedIn
								</a>
								<span className="text-gruvtan/40">|</span>
								<a
									href="https://github.com/arturovilla"
									target="_blank"
									rel="noreferrer"
									className="text-gruvpink hover:text-gruvtan transition"
								>
									GitHub
								</a>
								<span className="text-gruvtan/40">|</span>
								<a
									href="https://www.rtvro.dev"
									target="_blank"
									rel="noreferrer"
									className="text-gruvpink hover:text-gruvtan transition"
								>
									rtvro.dev
								</a>
							</div>
						</div>
					</Card>

					<Card>
						<SectionTitle id="skills">SKILLS AND CERTIFICATIONS</SectionTitle>

						<div className="mt-4 grid md:grid-cols-2 gap-6">
							<div>
								<p className="text-gruvtan/80 text-sm mb-3">Languages</p>
								<div className="flex flex-wrap gap-2">
									{languages.map(({ name, tooltip }) => (
										<Chip key={name} tooltip={tooltip}>
											{name}
										</Chip>
									))}
								</div>
							</div>

							<div>
								<p className="text-gruvtan/80 text-sm mb-3">
									Data / Cloud / Tools
								</p>
								<div className="flex flex-wrap gap-2">
									{[
										"MSSQL/SQL",
										"MongoDB",
										"Redis",
										"NoSQL",
										"AWS",
										"Azure",
										"Docker",
										"Ansible",
										"Azure DevOps",
										"Jira",
									].map((x) => (
										<Chip key={x}>{x}</Chip>
									))}
								</div>
							</div>

							<div>
								<p className="text-gruvtan/80 text-sm mb-3">Platforms</p>
								<div className="flex flex-wrap gap-2">
									{["Teams", "Slack", "VSCode", "Xcode", "JetBrains"].map(
										(x) => (
											<Chip key={x}>{x}</Chip>
										)
									)}
								</div>
							</div>

							<div>
								<p className="text-gruvtan/80 text-sm mb-3">
									Languages (spoken)
								</p>
								<div className="flex flex-wrap gap-2">
									{[
										"English (Native)",
										"Spanish (Native)",
										"Portuguese (Beginner)",
									].map((x) => (
										<Chip key={x}>{x}</Chip>
									))}
								</div>
							</div>
						</div>
					</Card>

					<Card>
						<SectionTitle id="education">EDUCATION</SectionTitle>

						<div className="mt-4">
							<div className="flex flex-col md:flex-row md:justify-between gap-2">
								<div>
									<p className="font-semibold text-gruvtan">
										Texas A&amp;M University
									</p>
									<p className="text-sm text-gruvtan/80">
										Bachelor of Arts, Computer Science
										<br />
										Minor in Statistics
									</p>
								</div>
								<div className="text-sm text-gruvtan/70 md:text-right">
									College Station, TX
									<br />
									Graduated Dec 2022
								</div>
							</div>
						</div>
					</Card>

					<Card>
						<SectionTitle id="experience">WORK EXPERIENCE</SectionTitle>

						<div className="mt-4 space-y-6">
							<div>
								<RoleHeader
									title="Senior Software Engineer"
									companyName="Standard Data, Inc."
									companyUrl="https://standarddata.ai"
									location="• Houston, TX"
									dates="Aug 2023 – Present"
								/>
								<ul className="mt-3 list-disc pl-6 text-sm md:text-base text-gruvtan/85 space-y-2">
									<li>
									Reduced readiness-report prep time 40% across U.S. airbases by shipping Java/Spring Boot micro-services (TypeScript, MongoDB, SQLServer) that delivered ML-driven maintenance calculations.
									</li>
									<li>
									Led Azure (Pipelines / Ansible / Docker) CI/CD automation to streamline front-end and back-end deployments, accelerating prototype delivery and tightening client feedback cycles.
									</li>
									<li>
									Built and maintained a ( C# / Ansible / Docker ) data-sync tool that securely ingested 100s of GB of sensitive customer data, keeping
									demos production-current and boosting adoption.
									</li>
									<li>
									Ramped up in Java to support a major architecture shift; migrated from micro-services (Python / Redis / MongoDB / Java) to a
									monolith with two engineers, shipping a beta in 3 months and live-user testing in 6.
									</li>
									<li>
									Authored the organization’s System Security Plan (SSP) and led the end-to-end effort to achieve CMMC Level 1 compliance in one
									month, coordinating stakeholders, implementing required practices, and assembling audit-ready evidence.
									</li>
									<li>
									Served as a customer-facing, on-site engineer, deploying and demonstrating software to senior military stakeholders (including generals),
									providing operational support, and delivering new features in parallel.
                  </li>
                  <li>
                  Contributed heavily to core Java backend systems and much of the API, especially user-specific endpoints, data models, and latency-
                  reduction strategies for heavy calculations.
									</li>
								</ul>
							</div>

							<div>
								<RoleHeader
									title="Software Developer"
									companyName="Classic Canvas Company"
									companyUrl="https://cccliftbags.com"
									location="• San Antonio, TX"
									dates="Feb 2023 – Jun 2023"
								/>
								<ul className="mt-3 list-disc pl-6 text-sm md:text-base text-gruvtan/85 space-y-2">
									<li>
									Increased the efficiency of current customer outreach efforts by automating email marketing and creating a tool that can schedule and
									automatically post social media content.
									</li>
									<li>
									Deployed and configured a self-hosted accounting, invoicing, and expenses platform using Docker and PostgreSQL, with custom features
									such as company-specific branding, data views, and reporting. The solution eliminated QuickBooks subscriptions, saving over $4,000
									annually.
									</li>
								</ul>
							</div>

							<div>
								<RoleHeader
									title="Cloud Solutions Architect Intern"
									companyName="University Lands"
									companyUrl="https://universitylands.utsystem.edu"
									location="• Houston, TX"
									dates="May 2020 – Aug 2020"
								/>
								<ul className="mt-3 list-disc pl-6 text-sm md:text-base text-gruvtan/85 space-y-2">
									<li>
									Automated ETL workflows for Drilling and Completion reports in the Permian Basin by developing server-less Python Lambda functions
									on AWS. The solution streamlined integration of critical oil well data and saved engineers significant time previously spent on manual
									data entry.
									</li>
									<li>
									Collaborated with mechanical and petroleum engineers to design Python notebook templates that streamlined type curve creation and
									well cost analysis, improving data-driven decision-making and accelerating engineering and financial evaluations.
									</li>
								</ul>
							</div>

							<div>
								<RoleHeader
									title="Peer Teacher"
									companyName="Texas A&amp;M College of Engineering"
									companyUrl="https://engineering.tamu.edu/index.html"
									location="• College Station, TX"
									dates="Aug 2020 – Dec 2021"
								/>
								<ul className="mt-3 list-disc pl-6 text-sm md:text-base text-gruvtan/85 space-y-2">
									<li>
									Supported 70+ undergraduate and graduate students through weekly in-person/virtual office hours, while assisting instruction across
									five courses (Data Structures and Algorithms, Introduction to Computing, Computer Organization, Discrete Mathematics, and Linear
									Algebra) by reviewing materials and grading assignments.
									</li>
								</ul>
							</div>
						</div>
					</Card>

					<Card>
						<SectionTitle id="projects">PROJECTS</SectionTitle>

						<div className="mt-4">
							<RoleHeader
								title="Creative Developer"
								companyName="Art Club"
								companyUrl="https://www.artclubhtx.com"
								location="• Houston, TX"
								dates="Dec 2024 – Present"
							/>
							<ul className="mt-3 list-disc pl-6 text-sm md:text-base text-gruvtan/85 space-y-2">
								<li>
								Created immersive real-time 3D installations with TouchDesigner, Blender, and mathematical modeling, enhancing weekly live shows
								and permanent exhibits experienced by over 300 patrons per day.
								</li>
								<li>
								Maintain and repair over dozen high-performance servers powering real-time visualizations and gallery-wide installations, ensuring
								reliability and minimal downtime.
								</li>
							</ul>
						</div>
					</Card>
				</main>
			</div>
		</div>
	);
}

export default Resume;

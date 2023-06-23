import React from 'react'
import useDownloader from "react-use-downloader";


function Resume() {
    const {download } = useDownloader();
    const fileUrl = "/arturo_villalobos_resume.pdf";
    const filename = "arturo_villalobos_resume.pdf";

    
  return (

    
    
    <div className='flex justify-center text-center mt-32 mb-48'>

        <div className='text-[#E4DFDB] font-serif flex-col items-center w-11/12 md:w-4/5 max-w-5xl'>
            <div className='mb-5 font-sans'>
                <button onClick={() => download(fileUrl, filename)} className=' text-lg py-1 px-5 text-white rounded-md border border-white hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-stone-300 transition duration-150 ease-in-out'>Download PDF</button>
            </div>

            <div className='bg-[#2E2B35] px-3 py-2 rounded-md'>
                {/* /////////////////////////////////////////////// */}
                <h1 className=' text-4xl font-bold'>Arturo Villalobos Jr</h1>
                <p className='text-xs pt-3 pb-2'>
                    San Antonio, TX | artuvillam@gmail.com | +1 432-312-5912 | https://www.linkedin.com/in/rtvro/ | https://github.com/arturovilla | arturovillalobos.dev
                </p>    
                <hr className=''/>

                {/* /////////////////////////////////////////////// */}
                <h2 className='font-semibold pt-3'>SKILLS AND CERTIFICATIONS</h2>
                <div className='text-left pb-2'>
                    <ul class="list-disc pl-6">
                        <li>C++, Java, Python 3+, R, Javascript, HTML, CSS, React.js, Node.js, SQL, AWS, Machine Learning</li>
                        <li>Platforms and Tools: Git Version Control, VScode, Xcode, Adobe Illustrator, Unreal Engine 4, Blender</li>
                        <li>AWS Certified Cloud Practitioner Certification | Issued June 2020- Expires June 2023</li>
                        <li>Languages: English-Native, Spanish-Native, Portuguese-Beginner</li>
                    </ul>
                </div>
                <hr className=''/>

                {/* /////////////////////////////////////////////// */}
                <h2 className='font-semibold pt-3'>WORK EXPERIENCE</h2>
                <div className=' pb-2'>
                    <div className='flex justify-between font-medium text-md'>
                        <h3 >Web Developer, Blyss Dating (Remote)</h3>
                        <h3 > Mar 2023 - Present</h3>
                    </div>
                    <div className='text-left pb-2 text-sm w-10/12'>
                        <ul class="list-disc pl-6">
                            <li>Develop and deploy a highly scalable and maintainable business website using React/Next.js, Tailwind CSS and AWS.</li>
                            <li>Integrate a headless content management system (CMS) for Blyss news room and blog capabilities with GraphQL, giving other team members the ability to add content.</li>
                            <li>Ensure that the website was viewable and performant on different mobile devices and browsers.</li>
                        </ul>
                    </div>

                    <div className='flex justify-between font-medium text-md'>
                        <h3 >Software Developer, Classic Canvas Company, San Antonio, TX.</h3>
                        <h3 >Feb 2023 - June 2023</h3>
                    </div>
                    <div className='text-left pb-2 text-sm w-10/12'>
                        <ul class="list-disc pl-6">
                            <li>Develop internal automation tools and web interface using React, Python, and AWS to increased social media presence and activity without allocating more resources to marketing.</li>
                            <li>Create and maintain SOPs detailing tools that where used, specific system design decisions, and other information.</li>
                        </ul>
                    </div>

                    <div className='flex justify-between font-medium text-md'>
                        <h3 >Cloud Solutions Architect Internship, University Lands, Houston, TX</h3>
                        <h3 >May 2020 - Aug 2020</h3>
                    </div>
                    <div className='text-left pb-2 text-sm w-10/12'>
                        <ul class="list-disc pl-6">
                            <li>Developed and deployed sever-less lambda functions in python on the AWS cloud that automates the extraction of data from Drilling and Completion reports coming from oil wells in the Permian Basin. </li>
                            <li>Built architecture used by chemical and mechanical engineers to build type curves and facilitate cost analysis of current wells</li>
                        </ul>
                    </div>

                    <div className='flex justify-between font-medium text-md'>
                        <h3 >Peer Teacher, Texas A&M College of Engineering, College Station, TX.</h3>
                        <h3 >Aug 2020 - Dec 2021</h3>
                    </div>
                    <div className='text-left pb-2 text-sm w-10/12'>
                        <ul class="list-disc pl-6">
                            <li>Tutored undergraduate and graduate students enrolled in Computer Science and Engineering courses in both remote and in-person.</li>
                            <li>Taught the following courses: Data Structures and Algorithms , Introduction to Computing, Computer Organizations, Discrete Mathematics, and Linear Algebra under professor supervision</li>
                        </ul>
                    </div>
                </div>
                <hr className=''/>

                {/* /////////////////////////////////////////////// */}
                <h2 className='font-semibold pt-3'>EDUCATION</h2>
                <div className='pb-2'>
                    <div className='flex justify-between font-medium text-md'>
                        <h3 >Texas A&M University</h3>
                        <h3 >College Station, TX</h3>
                    </div>
                    <div className='flex justify-between  text-sm'>
                        <h3 className='text-left'>Bachelor of Arts Computer Science<br/>Minor in Statistics</h3>
                        <h3 >Graduated Dec 2022</h3>
                    </div>
                </div>
                <hr className=''/>

                {/* /////////////////////////////////////////////// */}
                <h2 className='font-semibold pt-3'>PROJECTS</h2>
                <div className='pb-2'>
                    <div className='flex justify-between font-medium text-md'>
                        <h3 >Juego - Lead Developer - React Web App</h3>
                        <h3 >Nov 2021- Dec 2021</h3>
                    </div>
                    <div className='text-left pb-2 text-sm w-10/12'>
                        <ul class="list-disc pl-6">
                            <li>Led a team of developers to launch a social network platform that connected users with similar interests with respect to video games and other media using a PostgreSQL database, React framework, and Node.JS backend.</li>
                            <li>Using an agile development methodology I set targets, tracked progress, and delivered our working product.</li>
                        </ul>
                    </div>

                    <div className='flex justify-between font-medium text-md'>
                        <h3 >Olympic Index - Co-Developer - Design Project </h3>
                        <h3 >Sep 2021 - Dec 2021</h3>
                    </div>
                    <div className='text-left pb-2 text-sm w-10/12'>
                        <ul class="list-disc pl-6">
                            <li>Developed a responsive, design focused, data visualization project with React.js, D3.js, and Python to explore historical olympic data with a variety of charts, each highlighting different aspects of the data to reveal underlying and interesting patterns.</li>
                        </ul>
                    </div>

                    <div className='flex justify-between font-medium text-md'>
                        <h3 >Market Dash - Co-Developer - Video Game</h3>
                        <h3 >Mar 2020- Apr 2020</h3>
                    </div>
                    <div className='text-left pb-2 text-sm w-10/12'>
                        <ul class="list-disc pl-6">
                            <li>Developed a game in C++ inside Unreal Engine 4 incorporating concepts and ideas like object oriented design, graphic design, planning, and testing.</li>
                        </ul>
                    </div>
                </div>
                {/* ///////////////////////////////////////////// */}
            </div>
        </div>
    </div>
  )
}

export default Resume
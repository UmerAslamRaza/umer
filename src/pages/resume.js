'use client';
import Head from "next/head";
import Image from "next/image";
import React from 'react';
import Link from "next/link";
import {withBasePath} from "@/utils/basePath";
export default function Resume() {
    const userPic = "/images/user-side.jpg";
    return (

        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Umer Resume</title>
                <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="11x15"/>
            </Head>
            <div className="main-content w-100">

                    <section className="pt-120 pb-120 mt-10 mt-lg-0">
                        <div >
                            <div className="pb-60 br-bottom-n3">
                                <div data-aos="zoom-in" className="page-heading"><h3
                                    className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">Online
                                    Resume</h3><Link href="/resume.pdf"
                                                  className="w-max p-btn bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
                                                  download="">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256"
                                         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z"></path>
                                    </svg>
                                    Download PDF Version</Link></div>
                            </div>
                        </div>
                        <div className="container mt-8 mt-md-15">
                            <div >
                                <div className="bgn2-color p-4 p-sm-8 p-md-15 rounded-5 brn4">
                                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 br-bottom-n3 pb-3 pb-md-6">
                                        <div><h2 className="display-three p1-color fw-semibold">Umer Aslam</h2><span
                                            className="n4-color fs-six fw-medium">Full Stack Developer</span></div>
                                        <div className="ps-5 br-left-n3">
                                            <ul className="d-flex flex-column gap-3">
                                                <li><a className="d-flex gap-2 align-items-center n4-color"
                                                       href="tel:+923216029389">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                         viewBox="0 0 256 256" height="1em" width="1em"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                                                    </svg>
                                                    +97336523934</a></li>
                                                <li><a className="d-flex gap-2 align-items-center n4-color"
                                                       href="mailto:umeraslamraza1@gmail.com">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                         viewBox="0 0 256 256" height="1em" width="1em"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                                                    </svg>
                                                    umeraslamraza1@gmail.com</a></li>
                                                <li className="d-flex gap-2 align-items-center n4-color">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                         viewBox="0 0 256 256" height="1em" width="1em"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                                                    </svg>
                                                    Bahrain
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap flex-md-nowrap align-items-center gap-5 gap-md-10 pb-4 pb-md-8 br-bottom-n3 pt-60">
                                        <div className="resume-profile flex-shrink-0">

                                            <Image
                                                alt="profile"
                                                loading="lazy"
                                                width={145}
                                                height={159}
                                                decoding="async"
                                                className="object-fit-cover"
                                                style={{color: 'transparent'}}
                                                src={withBasePath(userPic)}
                                            />

                                        </div>
                                        <p className="n42-color fs-seven">Results-driven Full Stack Developer with 6+ years of experience building scalable web platforms and AI-powered applications. Strong expertise in Laravel, React.js, and modern JavaScript ecosystems, with recent experience developing AI-driven systems integrating Large Language Models (LLMs), automation workflows, and intelligent decision engines. Experienced in designing automation pipelines, AI-assisted business systems, and data-driven platforms that improve operational efficiency. Skilled at building full-stack architectures that combine backend APIs, automation engines, and AI integrations for modern SaaS and enterprise applications.</p></div>
                                    <div className="resume-section row pt-60 pb-60 br-bottom-n3">
                                        <div className="col-md-8 col-lg-12 col-xl-8 col-xxl-9">
                                            <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                                                <div className="title-line2"></div>
                                                <h2 className="fs-three p1-color fw-semibold">Work Experiences</h2></div>
                                            <div className="mb-4 mb-md-6">
                                                <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center">
                                                    <span className="n5-color fs-six fw-medium">ActionLabs – Bahrain, Onsite</span><span
                                                    className="n4-color fs-eight">Full-Stack Developer | Sep 2025 - Present</span></div>
                                                <p className="n42-color fs-seven my-2 my-md-5">At ActionLabs, I design and develop AI-powered internal systems that integrate Large Language Models (LLMs) with business workflows and enterprise platforms. My work focuses on building intelligent systems that analyze operational and funnel data to support strategic decision making for sales and management teams. I developed AI-driven decision engines that evaluate historical performance data to identify strategies that previously worked best and generate optimized recommendations for future actions.

                                                    To ensure reliability and control, I implemented human-in-the-loop workflows where AI-generated recommendations are reviewed and approved by users before execution. Once approved, these decisions are recorded in structured decision logs and automatically trigger downstream processes such as task creation and workflow execution within internal management systems.

                                                    I also build complex automation pipelines using n8n, integrating multiple APIs, AI services, and business tools to streamline operational processes and reduce manual work. Alongside backend system development using Laravel and modern JavaScript stacks, I design orchestration layers that manage AI responses, automation triggers, and data processing workflows.

                                                    In addition to AI systems and automation platforms, I develop lightweight browser-based interactive experiences using Three.js and WebGL, creating small experimental 3D mini-games and interactive environments for internal projects.

                                                </p>
                                            </div>
                                            <div className="mb-4 mb-md-6">
                                                <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center">
                                                    <span className="n5-color fs-six fw-medium">Springring – Bahrain, Remote</span><span
                                                    className="n4-color fs-eight">Full-Stack Developer | Nov 2023 – Dec 2024</span></div>
                                                <p className="n42-color fs-seven my-2 my-md-5">At Springring, I unified student, teacher, and parent platforms into a single high-performance React.js application, improving UI responsiveness and maintainability. I led the migration of three interfaces, reducing code duplication and speeding development. Developed reusable components and managed state using Redux and Context API. Designed a secure real-time messaging system with WebSocket and Laravel APIs. Worked with designers to create responsive, accessible UIs. Integrated JWT and OAuth for secure authentication. Collaborated with backend teams to optimize APIs and implemented performance enhancements like code splitting and lazy loading, resulting in faster load times and better user engagement.
                                                </p>
                                            </div>
                                            <div className="mb-4 mb-md-6">
                                                <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                                    <span className="n5-color fs-six fw-medium">VII Tech Solutions – Bahrain, Remote</span><span
                                                    className="n4-color fs-eight">Full-Stack Developer | Aug 2022 – Nov 2023</span></div>
                                                <p className="n42-color fs-seven my-2 my-md-5">At VII Tech Solutions, I contributed to full-stack applications for enterprise clients, government, and startups across MENA. I engineered scalable Laravel RESTful APIs with secure JWT authentication supporting thousands of users. Integrated Google Maps API and Mapbox for real-time geolocation, routing, and geo-fencing. Developed dynamic UIs using Vue.js, React.js, and React Native, including features for a healthcare transportation app. Led sprint demos, collaborated on testing, and mentored juniors. Achievements include reducing API response time by 50%, launching an event booking system with 10,000+ users, and improving front-end performance with lazy loading, reducing bounce rates by 40%.</p>

                                            </div>
                                            <div className="mb-4 mb-md-6">
                                                <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                                    <span className="n5-color fs-six fw-medium">Tres Logics – Pakistan, Onsite</span><span
                                                    className="n4-color fs-eight">Full-Stack Developer | Oct 2021 – Sep 2022</span></div>
                                                <p className="n42-color fs-seven my-2 my-md-5">At TresLogics, I developed in-house and client-facing e-learning, Q&A, and digital commerce apps. I built Laravel RESTful APIs with efficient database design and crafted front-end modules using Vue.js, React.js, and React Native for seamless web and mobile experiences. Integrated payment gateways and SMS APIs to enable real-time transactions and interactions. Maintained code stability through Git and CI/CD workflows. Achievements include developing a question management system that cut admin errors by 70%, implementing automated deployments that reduced deployment time by 80%, and helping design a scalable Q&A platform used by thousands of students.</p>
                                            </div>
                                            <div className="mb-4 mb-md-6">
                                                <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                    <span className="n5-color fs-six fw-medium">Tabs Group International – Pakistan, Onsite</span><span
                                                    className="n42-color fs-eight"> Laravel Developer | Oct 2020 – Oct 2021</span></div>
                                                <p className="n42-color fs-seven">At Tabs Group International, I developed backend systems for transportation and logistics using Laravel. I focused on building core modules like user authentication, ride scheduling, and fare calculations. Integrated Google Maps API for real-time location tracking and route optimization. Implemented smart ride assignment algorithms to balance workload and reduce driver wait time by 30%. Used Twilio for SMS notifications and Guzzle for API communication. Developed Role-Based Access Control systems for secure multi-level user permissions. Consistently improved platform stability and performance through code refactoring and profiling.</p>
                                            </div>
                                            <div className="mb-4 mb-md-6">
                                                <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                    <span className="n5-color fs-six fw-medium">Code Brisk – Pakistan, Onsite</span><span
                                                    className="n42-color fs-eight">Intern | Apr 2019 – Sep 2019</span></div>
                                                <p className="n42-color fs-seven">During my internship at CodeBrisk, I gained hands-on experience in full-stack development by contributing to multiple internal projects. I assisted in building a real-time result generation system using Laravel and Vue.js, developed reusable backend modules for sales and deductions, and actively participated in code reviews and paired programming sessions. As part of a small team, I helped develop a scalable article publishing platform with dynamic media uploads and categorization. I also maintained over 90% unit test coverage to ensure high code quality and reliability.</p>
                                            </div>

                                        </div>
                                        <div className="col-md-4 col-lg-12 col-xl-4 col-xxl-3">
                                            <div className="ps-4 ps-xxl-7 br-left-n3 mt-5 mt-md-0">
                                                <div className="mb-8 mb-md-15">
                                                    <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                                                        <div className="title-line2"></div>
                                                        <h2 className="fs-three p1-color fw-semibold">Skills</h2></div>
                                                    <div className="mb-3 mb-md-6"><h5
                                                        className="fs-six n5-color fw-medium mb-2 mb-md-4">Technical</h5>
                                                        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                            <li className="n4-color fs-seven">HTML/CSS/Bootstrap</li>
                                                            <li className="n4-color fs-seven">Tailwind CSS/Vuetify</li>
                                                            <li className="n4-color fs-seven">JavaScript/Vue/React/React Native</li>
                                                            <li className="n4-color fs-seven">Typescript/Redux/Context/Vuex</li>
                                                            <li className="n4-color fs-seven">PHP/Laravel</li>
                                                            <li className="n4-color fs-seven">MySQL/Mongo DB</li>
                                                            <li className="n4-color fs-seven">N8N automations</li>
                                                            <li className="n4-color fs-seven">AI LLM integrations</li>

                                                        </ul>
                                                    </div>
                                                    <div><h5 className="fs-six n5-color fw-medium mb-2 mb-md-4">
                                                        Professional</h5>
                                                        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                            <li className="n4-color fs-seven">Effective communication</li>
                                                            <li className="n4-color fs-seven">Team player</li>
                                                            <li className="n4-color fs-seven">Strong problem solver</li>
                                                            <li className="n4-color fs-seven">Good time management</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mb-8 mb-md-15">
                                                    <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                                                        <div className="title-line2"></div>
                                                        <h2 className="fs-three p1-color fw-semibold">Education</h2></div>
                                                    <div className="d-flex gap-2 mb-3 mb-md-5"><i className="fs-six p1-color">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                             viewBox="0 0 256 256" height="1em" width="1em"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                                                        </svg>
                                                    </i>
                                                        <div><span className="n4-color fs-seven">Bachelor of Science in Computer Science - University of Sargodha</span><span
                                                            className="n4-color fs-eleven">Apr 2016 – Aug 2020</span></div>
                                                    </div>

                                                </div>
                                                <div className="mb-8 mb-md-15">
                                                    <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                                                        <div className="title-line2"></div>
                                                        <h2 className="fs-three p1-color fw-semibold">Languages</h2></div>
                                                    <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                        <li className="n4-color fs-seven">English(Native)</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                                                        <div className="title-line2"></div>
                                                        <h2 className="fs-three p1-color fw-semibold">Interests</h2></div>
                                                    <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                        <li className="n4-color fs-seven">Football</li>
                                                        <li className="n4-color fs-seven">Snowboarding</li>
                                                        <li className="n4-color fs-seven">Photography</li>
                                                        <li className="n4-color fs-seven">Travelling</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap gap-2 gap-md-3 gap-md-5 align-items-center justify-content-center mt-4 mt-md-8">
                                        <a className="d-flex gap-1 align-items-center resume-icon" href="https://github.com/UmerAslamRaza" target="_blank" rel="noopener noreferrer">
                                            <div className="social-icon">
                                                <i className="p1-color">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                         viewBox="0 0 256 256" height="1em" width="1em"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28A8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24A8,8,0,0,0,69.07,28a59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                                                    </svg>
                                                </i>
                                            </div>
                                            <span className="fs-eight n4-color">github.com/UmerAslamRaza</span>
                                        </a>
                                        <a className="d-flex gap-1 align-items-center resume-icon" href="https://www.linkedin.com/in/umer-aslam-raza-/" target="_blank" rel="noopener noreferrer">
                                            <div className="social-icon">
                                                <i className="p1-color">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                         viewBox="0 0 256 256" height="1em" width="1em"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                                                    </svg>
                                                </i>
                                            </div>
                                            <span className="fs-eight n4-color">linkedin.com/in/umer-aslam-raza-</span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>


            </div>
        </>
);
}

'use client';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

import projects from '@/enums/projects';
import useResponsiveHeight from '@/hooks/useResponsiveHeight';
import ProjectCard from '@/components/ProjectCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {TESTIMONIALS} from "@/enums/testimonials";
import {withBasePath} from '@/utils/basePath';

export default function Home() {
    const userPic = "/images/user.jpg";
    const laravelIcon = "/images/laravel.svg";
    const resumeIcon = "/images/resume-icon.png";
    const reactIcon = "/images/react.png";
    const vueIcon = "/images/vue.png";
    const tailwindIcon = "/images/tailwind-css.svg";
    const bootstrapIcon = "/images/bootstrap.svg";
    const vuetifyIcon = "/images/vuetify.svg";
    const javascriptIcon = "/images/javascript-js.svg";
    const typescriptIcon = "/images/typescript.svg";
    const jqueryIcon = "/images/jquery-plain-wordmark.svg";
    const reduxIcon = "/images/redux-original.svg";
    const vuexIcon = "/images/vue-dot-js.svg";
    const gitIcon = "/images/github.svg";
    const postmanIcon = "/images/postman.svg";
    const firebaseIcon = "/images/file-type-firebase.svg";
    const miroIcon = "/images/miro.svg";
    const basecampIcon = "/images/basecamp.svg";
    const jiraIcon = "/images/jira.svg";
    const phpIcon = "/images/php.png";
    const htmlIcon = "/images/html.png";
    const cssIcon = "/images/css.png";

    const featuredProjects = projects.filter(project => project.featured);
    const height = useResponsiveHeight();

    return (

        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Umer Aslam Raza – Full Stack Developer Portfolio</title>
                <meta name="description" content="Explore Umer Aslam Raza's portfolio showcasing full-stack projects, client testimonials, and contact information." />

                <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32" />

                <meta property="og:title" content="Umer Aslam – Full Stack Developer Portfolio" />
                <meta property="og:description" content="Showcasing modern web and mobile development projects, with client testimonials from across the globe." />
                <meta property="og:image" content="https://umeraslamraza.github.io/umer/images/user-side.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://umeraslamraza.github.io/umer/" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Umer Aslam – Full Stack Developer" />
                <meta name="twitter:description" content="Explore projects, testimonials, and contact details." />
                <meta name="twitter:image" content="https://umeraslamraza.github.io/umer/images/user-side.jpg" />

            </Head>


            <div className="main-content w-100">
                <main>
                    <div className="overflow-hidden">
                        <section className="pt-120 pb-60 br-bottom-n3  mt-10 mt-lg-0">
                            <div className="container">
                                <div
                                    className="d-flex flex-wrap gap-3 gap-md-12 align-items-center justify-content-between">
                                    <div className="section-heading">
                                            <span
                                                className="n5-color fs-five">Hi, I&#x27;M A Full Stack
                                            </span>
                                        <h2 className="typing-text display-one p1-color mt-2 mb-3">
                                            <span>Developer</span>
                                        </h2>
                                        <p className="fs-seven n4-color mt-2 mt-md-4">
                                            I help businesses and teams transform ideas into scalable, high-performance web applications and intelligent digital platforms. My work focuses on building modern systems that combine robust backend architecture with interactive frontends and emerging AI capabilities. From business dashboards and SaaS platforms to automation systems and data-driven tools, I develop solutions that are reliable, user-focused, and designed to scale.
<br/><br/>
                                            With strong experience across the full stack using technologies such as Laravel, React, and modern JavaScript frameworks, I build applications that deliver smooth performance and seamless user experiences. I also work on integrating AI technologies, automation workflows, and data analysis systems that help organizations streamline operations, gain insights, and make more informed decisions.
<br/><br/>
                                            Alongside enterprise platforms and internal business tools, I also experiment with interactive web technologies such as Three.js to create engaging browser-based experiences and lightweight 3D applications.
<br/><br/>
                                            My work spans full-stack development, AI integrations, automation systems, and scalable platform architecture, with a focus on building practical solutions that support real business needs. Explore my project portfolio and online resume to learn more about the systems and platforms I have developed.

                                            <br/>
                                        </p>
                                        <ul className="fs-seven n4-color mt-2 mt-md-4">
                                            <li>Need a quick MVP?</li>
                                            <li>Looking to revamp your current site?</li>
                                            <li>Want a developer who communicates well and meets deadlines?</li>
                                        </ul>
                                        <br/>
                                        <p className="fs-seven n4-color mt-2 mt-md-4">
                                            Let’s talk, I’m currently available for freelance or full-time roles and
                                            would love to hear what you're working on. Explore my
                                            <Link className="p1-color" href="/portfolio"> project portfolio </Link>and
                                            <Link className="p1-color" href="/resume"> online resume</Link>.
                                        </p>

                                        <div
                                            className="d-flex flex-wrap align-itmes-center gap-3 gap-md-6 mt-4 mt-md-8">
                                            <Link
                                                className="p-btn n11-color bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2"
                                                href="/portfolio">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                                </svg>
                                                View Portfolio</Link>
                                            <Link
                                                className="p-btn n11-color bgn51-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2"
                                                href="/resume">
                                                <Image
                                                    alt="Resume Icon"
                                                    loading="lazy"
                                                    width={24}
                                                    height={25}
                                                    decoding="async"
                                                    style={{color: 'transparent'}}
                                                    src={withBasePath(resumeIcon)}

                                                />View Resume</Link>

                                        </div>
                                    </div>
                                    <div className="position-relative profile-img">
                                        <div className="user-bg"></div>
                                        <div className="bg-white">
                                            <Image
                                                alt="user-umer"
                                                loading="lazy"
                                                width={326}
                                                height={398}
                                                decoding="async"
                                                className="user-img"
                                                style={{color: 'transparent'}}
                                                src={withBasePath(userPic)}

                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="banner-counter d-flex flex-wrap flex-xl-nowrap align-items-center gap-3 gap-md-6 mt-10 mt-md-17">
                                    <div className="d-flex align-items-center gap-2 gap-xl-4"><h2
                                        className="display-two fw-semibold p1-color"><span>5</span></h2>
                                        <div className="line"></div>
                                        <span className="n5-color">Years of Experience</span></div>
                                    <div className="d-flex align-items-center gap-2 gap-xl-4"><h2
                                        className="display-two fw-semibold p1-color"><span>80</span></h2>
                                        <div className="line"></div>
                                        <span className="n5-color">More than Projects Completed</span></div>
                                    <div className="d-flex align-items-center gap-2 gap-xl-4"><h2
                                        className="display-two fw-semibold p1-color d-flex gap-1"><span>60</span>
                                    </h2>
                                        <div className="line"></div>
                                        <span className="n5-color">More than Clients worked worldwide</span></div>
                                </div>
                            </div>
                        </section>
                        <section className="pt-120 pb-120">
                            <div className="container">
                                <div>
                                    <div
                                        className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end">
                                        <div className="section-heading">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="title-line"></div>
                                                <h2 className="display-four n5-color fw-semibold">What I do</h2>
                                            </div>
                                            <p className="fs-seven n4-color mt-2 mt-md-4">I’m a Full Stack Developer
                                                with 5 years of experience creating web and mobile apps that are not
                                                just functional but also secure and easy to scale. I’ve spent most of my
                                                time working with Laravel and Vue.js, and more recently with React.js
                                                and React Native. I enjoy building clean APIs, managing databases like
                                                MySQL and MongoDB, and connecting apps with third-party tools. I’m
                                                passionate about solving real problems through code and delivering work
                                                that makes a difference for clients around the world. Want to
                                                find out
                                                more about my experience? Check out my <Link className="p1-color"
                                                                                             href="/resume">online
                                                    resume</Link> and <Link className="p1-color" href="/portfolio">project
                                                    portfolio</Link>.</p></div>
                                        <Link
                                            className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
                                            href="/contact">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                            </svg>
                                            Let's talk</Link></div>
                                </div>
                                <div className="row g-3 g-md-6 pt-60">
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="html"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(htmlIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="css"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(cssIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">HTML &amp;
                                                    CSS</h4>
                                                <p className="fs-seven n4-color">
                                                    Experienced in creating responsive, Converting figma mockups to
                                                    pixel-perfect UIs using HTML5, CSS3, Sass, and Bootstrap.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="tailwind"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(tailwindIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="bootstrap"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(bootstrapIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="vuetify"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(vuetifyIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Tailwind
                                                    css, Bootstrap &amp;
                                                    Vuetify</h4>
                                                <p className="fs-seven n4-color">
                                                    Skilled in modern UI frameworks like Tailwind CSS, Bootstrap 5, and
                                                    Vuetify for sleek, scalable designs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="jquery"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(jqueryIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="javascript"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(javascriptIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="typescript"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(typescriptIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Jquery,
                                                    Javascript &amp;
                                                    Typescript</h4>
                                                <p className="fs-seven n4-color">
                                                    Proficient in interactive web development using JavaScript,
                                                    TypeScript, and legacy support with jQuery.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="vue"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(vueIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="react"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(reactIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Vue,
                                                    React &amp;
                                                    React Native</h4>
                                                <p className="fs-seven n4-color">
                                                    Developed dynamic web and mobile apps using Vue.js, React.js, and
                                                    React Native with reusable component design and clean structure.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="redux"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(reduxIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="vuex"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(vuexIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Redux,
                                                    Context API &amp;
                                                    Vuex</h4>
                                                <p className="fs-seven n4-color">
                                                    Proficient in managing complex application states using Redux for
                                                    React and Vuex for Vue.js. Experienced with Context API for
                                                    lightweight state management, ensuring scalability, optimized
                                                    component performance and stability.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="Laravel"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(laravelIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="php"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(phpIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">PHP
                                                    &amp; Laravel</h4>
                                                <p className="fs-seven n4-color">
                                                    Expert in backend development with PHP and Laravel, focusing on
                                                    building RESTful APIs, authentication systems, and scalable web
                                                    applications. Familiar with Eloquent ORM, queues, event
                                                    broadcasting, and Laravel Reverb for real-time features.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="git"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(gitIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="postman"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(postmanIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="firebase"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(firebaseIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Git,
                                                    Postman &amp; Firebase</h4>
                                                <p className="fs-seven n4-color">
                                                    Experienced in version control using Git for collaborative
                                                    development. Skilled in API testing and documentation with Postman.
                                                    Hands-on with Firebase for authentication, Firestore, push
                                                    notifications, and real-time data handling in mobile apps.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="miro"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(miroIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="basecamp"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(basecampIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="jira"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(jiraIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Miro,Basecamp &amp;
                                                    Jira</h4>
                                                <p className="fs-seven n4-color">
                                                    Familiar with agile tools like Miro for brainstorming and product
                                                    design, Basecamp for team collaboration, and Jira for sprint
                                                    planning, task tracking, and effective project management in
                                                    cross-functional teams and google meet for team meetings.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="next-project pt-120 pb-120">
                            <div>
                                <div
                                    className="container d-flex gap-3 gap-md-6 flex-wrap justify-content-between align-items-center">
                                    <div className="next-project-content"><h3
                                        className="display-four n11-color fw-semibold mb-2 mb-md-4">Your Project
                                        Deserves the Right Developer</h3>
                                        <p className="fs-seven n11-color">Whether it’s freelance or full-time, I’m ready
                                            to contribute. Let’s make your next product a success.</p></div>
                                    <Link
                                        className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100"
                                        href="/contact">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                        </svg>
                                        Let’s get in touch</Link></div>
                            </div>
                        </section>
                        <section className="pt-120 pb-120 br-bottom-n3">
                            <div className="container">
                                <div>
                                    <div
                                        className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15">
                                        <div className="section-heading">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="title-line"></div>
                                                <h2 className="display-four n5-color fw-semibold">Featured
                                                    Projects
                                                </h2>
                                            </div>
                                            <p className="fs-seven n4-color mt-2 mt-md-4">Every project you see here was
                                                crafted with care, built to solve real-world challenges, and designed to
                                                leave a lasting impression. I treat each line of code as a step toward
                                                helping clients grow and innovate.</p></div>
                                        <Link
                                            className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
                                            href="/portfolio">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                            </svg>
                                            View Portfolio
                                        </Link>
                                    </div>
                                </div>
                                <div className="row g-6 g-md-10 ">
                                    {featuredProjects.map(project => (
                                        <ProjectCard key={project.id} project={project} height={height}/>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <section className="pt-120 pb-120 br-bottom-n3">
                            <div className="container">
                                <div>
                                    <div
                                        className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15">
                                        <div className="section-heading">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="title-line"></div>
                                                <h2 className="display-four n5-color fw-semibold">Testimonials</h2>
                                            </div>
                                            <p className="fs-seven n4-color mt-2 mt-md-4">Hear What My Clients Have to
                                                Say</p>

                                        </div>
                                        <Link
                                            className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
                                            href="/testimonials">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                            </svg>
                                            View Screenshots
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8 mt-md-15 overflow-x-hidden">
                                    <Swiper
                                        modules={[Pagination, Navigation, Autoplay]}
                                        navigation
                                        pagination={{clickable: true}}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 1000,
                                            disableOnInteraction: true,
                                        }}
                                    >
                                        {TESTIMONIALS.map((testimonial, idx) => (
                                            <SwiperSlide key={idx}>
                                                <div
                                                    className="px-5 px-md-10 py-6 py-md-12 bgn2-color box-shadow1 br-left-p1 position-relative mx-2 mx-md-4">

                                                    <p className="n4-color fs-six">{testimonial?.text}</p>
                                                    <div className="d-flex gap-3 align-items-center mt-4 mt-md-7">
                                                        <div>
                                                            <span
                                                                className="fs-eight d-block n5-color">{testimonial?.name}</span>
                                                            <span
                                                                className="fs-nine d-block n5-color">{testimonial?.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>


                                    <Swiper
                                        modules={[Pagination, Navigation, Autoplay]}
                                        navigation
                                        pagination={{clickable: true}}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: true,
                                        }}
                                    >
                                        {TESTIMONIALS.filter(t => t.isVideo).map((testimonial, idx) => (
                                            <SwiperSlide key={`video-${idx}`}>
                                                <div
                                                    className="px-5 px-md-10 py-6 py-md-12 bgn2-color box-shadow1 br-left-p1 position-relative mx-2 mx-md-4">
                                                    <video
                                                        controls
                                                        width="70%"
                                                        className="w-100 rounded-3"
                                                        style={{maxHeight: '450px'}}
                                                    >
                                                        <source src={withBasePath(testimonial.video)} type="video/mp4"/>
                                                        Your browser does not support the video tag.
                                                    </video>
                                                    <div className="d-flex gap-3 align-items-center mt-4 mt-md-7">
                                                        <div>
                                                            <span
                                                                className="fs-eight d-block n5-color">{testimonial?.name}</span>
                                                            <span
                                                                className="fs-nine d-block n5-color">{testimonial?.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                </div>

                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <style global jsx>{`
              .project-thumb {
                height: 220px !important;
                display: block;
              }

              @media (min-width: 576px) {
                .project-thumb {
                  height: 300px !important;
                }
              }

              @media (min-width: 768px) {
                .project-thumb {
                  height: 360px !important;
                }
              }

              @media (min-width: 992px) {
                .project-thumb {
                  height: 417px !important;
                }
              }

              .w-100 {
                width: 100% !important;
                object-fit: cover !important;
              }
            `}</style>
        </>

    );

}


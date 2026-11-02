import {Fragment} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CtaBanner from '@/components/CtaBanner';
import Icon from '@/components/icons';
import PillLink from '@/components/PillLink';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import Seo from '@/components/Seo';
import {TestimonialCarousel, VideoTestimonialCarousel} from '@/components/TestimonialCarousel';
import {HERO_INTRO, HERO_QUESTIONS, SERVICES, STATS} from '@/data/home';
import {getFeaturedProjects} from '@/data/projects';
import {PROFILE} from '@/data/site';
import {useProjectCardHeight} from '@/hooks/responsive';
import {withBasePath} from '@/utils/basePath';

const featuredProjects = getFeaturedProjects();

function ServiceCard({service}) {
    return (
        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
            <div>
                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                    <div className="d-flex align-items-center gap-3">
                        {service.icons.map((icon) => (
                            <div key={icon.src}>
                                <Image
                                    alt={icon.alt}
                                    loading="lazy"
                                    width={28}
                                    height={28}
                                    decoding="async"
                                    className="service-icon"
                                    style={{color: 'transparent'}}
                                    src={withBasePath(icon.src)}
                                />
                            </div>
                        ))}
                    </div>
                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">{service.title}</h4>
                    <p className="fs-seven n4-color">{service.description}</p>
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    const projectCardHeight = useProjectCardHeight();

    return (
        <>
            <Seo path="/"/>

            <div className="main-content w-100">
                <main>
                    <div className="overflow-hidden">
                        <section className="pt-120 pb-60 br-bottom-n3  mt-10 mt-lg-0">
                            <div className="container">
                                <div className="d-flex flex-wrap gap-3 gap-md-12 align-items-center justify-content-between">
                                    <div className="section-heading">
                                        <span className="d-inline-flex align-items-center gap-2 p1-color fs-eight fw-medium brn3 rounded-pill px-3 py-1 mb-3 mb-md-4">
                                            <Icon name="mapPin"/>
                                            Based in {PROFILE.location}
                                        </span>
                                        <br/>
                                        <span className="n5-color fs-five">Hi, I&#x27;M A Senior Full Stack</span>
                                        <h2 className="typing-text display-one p1-color mt-2 mb-3">
                                            <span>Developer</span>
                                        </h2>
                                        <p className="fs-seven n4-color mt-2 mt-md-4">
                                            {HERO_INTRO.map((paragraph, index) => (
                                                <Fragment key={index}>
                                                    {index > 0 && <><br/><br/></>}
                                                    {paragraph}
                                                </Fragment>
                                            ))}
                                            <br/>
                                        </p>
                                        <ul className="fs-seven n4-color mt-2 mt-md-4">
                                            {HERO_QUESTIONS.map((question) => <li key={question}>{question}</li>)}
                                        </ul>
                                        <br/>
                                        <p className="fs-seven n4-color mt-2 mt-md-4">
                                            Let’s talk, I’m currently available for freelance or full-time roles and
                                            would love to hear what you&apos;re working on. Explore my
                                            <Link className="p1-color" href="/portfolio"> project portfolio </Link>and
                                            <Link className="p1-color" href="/resume"> online resume</Link>.
                                        </p>

                                        {/* "align-itmes-center" typo kept intentionally: fixing it would change the button layout. */}
                                        <div className="d-flex flex-wrap align-itmes-center gap-3 gap-md-6 mt-4 mt-md-8">
                                            <PillLink href="/portfolio" color="n11-color n1-color"
                                                      icon={<Icon name="arrowRight"/>}>
                                                View Portfolio
                                            </PillLink>
                                            <PillLink
                                                href="/resume"
                                                background="bgn51-color"
                                                color="n11-color n1-color"
                                                icon={
                                                    <Image
                                                        alt="Resume Icon"
                                                        loading="lazy"
                                                        width={24}
                                                        height={25}
                                                        decoding="async"
                                                        style={{color: 'transparent'}}
                                                        src={withBasePath(PROFILE.resumeIcon)}
                                                    />
                                                }>
                                                View Resume
                                            </PillLink>
                                        </div>
                                    </div>
                                    <div className="position-relative profile-img">
                                        <div className="user-bg"></div>
                                        <div className="bg-white">
                                            <Image
                                                alt={PROFILE.fullName}
                                                loading="lazy"
                                                width={326}
                                                height={398}
                                                decoding="async"
                                                className="user-img"
                                                style={{color: 'transparent'}}
                                                src={withBasePath(PROFILE.avatar)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-counter d-flex flex-wrap flex-xl-nowrap align-items-center gap-3 gap-md-6 mt-10 mt-md-17">
                                    {STATS.map((stat) => (
                                        <div key={stat.label} className="d-flex align-items-center gap-2 gap-xl-4">
                                            <h2 className={`display-two fw-semibold p1-color${stat.className ? ` ${stat.className}` : ''}`}><span>{stat.value}</span></h2>
                                            <div className="line"></div>
                                            <span className="n5-color">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="pt-120 pb-120">
                            <div className="container">
                                <div>
                                    <div className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end">
                                        <SectionHeading
                                            title="What I do"
                                            description={
                                                <>
                                                    I’m a Senior Full Stack Developer with {PROFILE.yearsOfExperience}+ years
                                                    of experience creating web and mobile apps that are not just
                                                    functional but also secure and easy to scale. I’ve spent most of my
                                                    time working with Laravel and Vue.js, and more recently with React.js
                                                    and React Native. I enjoy building clean APIs, managing databases like
                                                    MySQL and MongoDB, and connecting apps with third-party tools. I’m
                                                    passionate about solving real problems through code and delivering work
                                                    that makes a difference for clients around the world. Want to find out
                                                    more about my experience? Check out my{' '}
                                                    <Link className="p1-color" href="/resume">online resume</Link> and{' '}
                                                    <Link className="p1-color" href="/portfolio">project portfolio</Link>.
                                                </>
                                            }
                                        />
                                        <PillLink href="/contact" className="h-100 text-nowrap" icon={<Icon name="arrowRight"/>}>
                                            Let&apos;s talk
                                        </PillLink>
                                    </div>
                                </div>
                                <div className="row g-3 g-md-6 pt-60">
                                    {SERVICES.map((service) => <ServiceCard key={service.title} service={service}/>)}
                                </div>
                            </div>
                        </section>

                        <CtaBanner
                            title="Your Project Deserves the Right Developer"
                            text="Whether it’s freelance or full-time, I’m ready to contribute. Let’s make your next product a success."
                        />

                        <section className="pt-120 pb-120 br-bottom-n3">
                            <div className="container">
                                <div>
                                    <div className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15">
                                        <SectionHeading
                                            title="Featured Projects"
                                            description="Every project you see here was crafted with care, built to solve real-world challenges, and designed to leave a lasting impression. I treat each line of code as a step toward helping clients grow and innovate."
                                        />
                                        <PillLink href="/portfolio" className="h-100 text-nowrap" icon={<Icon name="arrowRight"/>}>
                                            View Portfolio
                                        </PillLink>
                                    </div>
                                </div>
                                <div className="row g-6 g-md-10 ">
                                    {featuredProjects.map((project) => (
                                        <ProjectCard key={project.id} project={project} height={projectCardHeight}/>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="pt-120 pb-120 br-bottom-n3">
                            <div className="container">
                                <div>
                                    <div className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15">
                                        <SectionHeading title="Testimonials" description="Hear What My Clients Have to Say"/>
                                        <PillLink href="/testimonials" className="h-100 text-nowrap" icon={<Icon name="arrowRight"/>}>
                                            View Screenshots
                                        </PillLink>
                                    </div>
                                </div>

                                <div className="mt-8 mt-md-15 overflow-x-hidden">
                                    <TestimonialCarousel/>
                                    <VideoTestimonialCarousel/>
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

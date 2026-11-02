import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/icons';
import PillLink from '@/components/PillLink';
import Seo from '@/components/Seo';
import WorkModes from '@/components/WorkModes';
import {SocialHandleLinks} from '@/components/SocialLinks';
import {CERTIFICATIONS, EDUCATION, EXPERIENCE, INTERESTS, KEY_PROJECTS, LANGUAGES, RESUME_SUMMARY, SKILLS} from '@/data/resume';
import {CONTACT, HEADLINE, PROFILE} from '@/data/site';
import {withBasePath} from '@/utils/basePath';

function ResumeHeading({title, className = 'mb-3 mb-md-6'}) {
    return (
        <div className={`d-flex align-items-center gap-2 ${className}`}>
            <div className="title-line2"></div>
            <h2 className="fs-three p1-color fw-semibold">{title}</h2>
        </div>
    );
}

function BulletList({items}) {
    return (
        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
            {items.map((item) => <li key={item} className="n4-color fs-seven">{item}</li>)}
        </ul>
    );
}

function ExperienceItem({job}) {
    return (
        <div className="mb-5 mb-md-8">
            <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center">
                <span className="n5-color fs-six fw-medium">
                    {job.role}, {job.company} <span className="n4-color fs-eight fw-normal">({job.location})</span>
                </span>
                <span className="n4-color fs-eight">{job.mode ? `${job.period} | ${job.mode}` : job.period}</span>
            </div>
            {job.workModes && <WorkModes modes={job.workModes}/>}
            <ul className="d-flex flex-column gap-2 ms-6 ms-lg-10 mt-2 mt-md-4">
                {job.highlights.map((item) => <li key={item} className="n42-color fs-seven">{item}</li>)}
            </ul>
        </div>
    );
}

export default function Resume() {
    return (
        <>
            <Seo title="Umer Resume" path="/resume"/>
            <div className="main-content w-100">
                <section className="pt-120 pb-120 mt-10 mt-lg-0">
                    <div>
                        <div className="pb-60 br-bottom-n3">
                            <div data-aos="zoom-in" className="page-heading">
                                <h3 className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
                                    Online Resume
                                </h3>
                                <PillLink href={PROFILE.resumePdf} download="" color="n1-color" className="w-max mx-auto"
                                          icon={<Icon name="filePdf"/>}>
                                    Download PDF Version
                                </PillLink>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-8 mt-md-15">
                        <div>
                            <div className="bgn2-color p-4 p-sm-8 p-md-15 rounded-5 brn4">
                                <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 br-bottom-n3 pb-3 pb-md-6">
                                    <div>
                                        <h2 className="display-three p1-color fw-semibold">{PROFILE.name}</h2>
                                        <span className="n4-color fs-six fw-medium">{HEADLINE}</span>
                                    </div>
                                    <div className="ps-5 br-left-n3">
                                        <ul className="d-flex flex-column gap-3">
                                            {CONTACT.phone && (
                                                <li>
                                                    <a className="d-flex gap-2 align-items-center n4-color" href={CONTACT.phone.href}>
                                                        <Icon name="phone"/>
                                                        {CONTACT.phone.displayCompact}
                                                    </a>
                                                </li>
                                            )}
                                            <li>
                                                <a className="d-flex gap-2 align-items-center n4-color" href={`mailto:${CONTACT.email}`}>
                                                    <Icon name="envelopeSimple"/>
                                                    {CONTACT.email}
                                                </a>
                                            </li>
                                            <li className="d-flex gap-2 align-items-center n4-color">
                                                <Icon name="mapPin"/>
                                                {PROFILE.location}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap flex-md-nowrap align-items-center gap-5 gap-md-10 pb-4 pb-md-8 br-bottom-n3 pt-60">
                                    <div className="resume-profile flex-shrink-0">
                                        <Image
                                            alt={PROFILE.fullName}
                                            loading="lazy"
                                            width={145}
                                            height={159}
                                            decoding="async"
                                            className="object-fit-cover"
                                            style={{color: 'transparent'}}
                                            src={withBasePath(PROFILE.sidebarAvatar)}
                                        />
                                    </div>
                                    <p className="n42-color fs-seven">{RESUME_SUMMARY}</p>
                                </div>
                                <div className="resume-section row pt-60 pb-60 br-bottom-n3">
                                    <div className="col-md-8 col-lg-12 col-xl-8 col-xxl-9">
                                        <ResumeHeading title="Work Experience" className="mb-5 mb-md-10"/>
                                        {EXPERIENCE.map((job) => <ExperienceItem key={job.company} job={job}/>)}

                                        <ResumeHeading title="Key Projects" className="mt-8 mt-md-12 mb-5 mb-md-10"/>
                                        {KEY_PROJECTS.map((project) => (
                                            <div key={project.title} className="mb-5 mb-md-8">
                                                <span className="n5-color fs-six fw-medium d-block">{project.title}</span>
                                                <span className="n4-color fs-eight d-block">{project.label} | {project.stack}</span>
                                                <ul className="d-flex flex-column gap-2 ms-6 ms-lg-10 mt-2 mt-md-3">
                                                    <li className="n42-color fs-seven">{project.description}</li>
                                                </ul>
                                            </div>
                                        ))}
                                        <p className="n4-color fs-seven">
                                            More projects with screenshots:{' '}
                                            <Link className="p1-color" href="/portfolio">view the full portfolio</Link>
                                        </p>

                                        <ResumeHeading title="Education" className="mt-8 mt-md-12 mb-5 mb-md-10"/>
                                        {EDUCATION.map((entry) => (
                                            <div key={entry.degree} className="mb-5 mb-md-8">
                                                <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center">
                                                    <span className="n5-color fs-six fw-medium">{entry.degree}</span>
                                                    <span className="n4-color fs-eight">{entry.period}</span>
                                                </div>
                                                <span className="n4-color fs-seven d-block">{entry.institution}</span>
                                                {entry.note && <span className="p1-color fs-eight d-block">{entry.note}</span>}
                                            </div>
                                        ))}

                                    </div>
                                    <div className="col-md-4 col-lg-12 col-xl-4 col-xxl-3">
                                        <div className="ps-4 ps-xxl-7 br-left-n3 mt-5 mt-md-0">
                                            <div className="mb-8 mb-md-15">
                                                <ResumeHeading title="Skills" className="mb-5 mb-md-10"/>
                                                {SKILLS.map((group) => (
                                                    <div key={group.label} className="mb-3 mb-md-5">
                                                        <h5 className="fs-seven n5-color fw-medium mb-1">{group.label}</h5>
                                                        <p className="n4-color fs-eight">
                                                            {group.items}
                                                            {group.items && group.basic && ' · '}
                                                            {group.basic && <><em>basic:</em> {group.basic}</>}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mb-8 mb-md-15">
                                                <ResumeHeading title="Certifications"/>
                                                <BulletList items={CERTIFICATIONS.map((cert) => `${cert.name}, ${cert.year}`)}/>
                                            </div>
                                            <div className="mb-8 mb-md-15">
                                                <ResumeHeading title="Languages"/>
                                                <BulletList items={LANGUAGES}/>
                                            </div>
                                            <div>
                                                <ResumeHeading title="Interests"/>
                                                <BulletList items={INTERESTS}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <SocialHandleLinks className="d-flex flex-wrap gap-2 gap-md-3 gap-md-5 align-items-center justify-content-center mt-4 mt-md-8"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

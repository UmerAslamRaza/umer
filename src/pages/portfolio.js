import HireMeLink from '@/components/HireMeLink';
import ProjectCard from '@/components/ProjectCard';
import Seo from '@/components/Seo';
import projects from '@/data/projects';
import {useProjectCardHeight} from '@/hooks/responsive';

export default function Portfolio() {
    const projectCardHeight = useProjectCardHeight();

    return (
        <>
            <Seo title="Umer Portfolio" path="/portfolio"/>

            <div className="main-content w-100">
                <section className="pt-120 pb-120 mt-10 mt-lg-0">
                    <div>
                        <div className="pb-60 br-bottom-n3">
                            <div className="page-heading">
                                <h3 className="page-title n5-color fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
                                    A collection of my best projects
                                </h3>
                                <p className="fs-seven n5-color mb-4 mb-md-8 text-center">
                                    With years of experience in frontend and backend development, I&apos;ve crafted
                                    robust, user-friendly websites and web applications using modern frameworks and
                                    tools. Here are some highlights of my work, built with performance, usability, and
                                    clean code in mind.
                                </p>
                                <HireMeLink/>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-8 mt-md-15">
                        <div>
                            <div>
                                <div className="mt-5 mt-md-10">
                                    <div role="tabpanel" tabIndex="0">
                                        <div className="row g-5 g-md-10 mt-8 mt-md-15">
                                            {projects.map((project) => (
                                                <ProjectCard key={project.id} project={project} height={projectCardHeight}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

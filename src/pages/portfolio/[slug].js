import Markdown from 'markdown-to-jsx';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import CtaBanner from '@/components/CtaBanner';
import FramedImage from '@/components/FramedImage';
import HireMeLink from '@/components/HireMeLink';
import Seo from '@/components/Seo';
import projects, {getProjectById, getProjectHref} from '@/data/projects';

const SWIPER_MODULES = [Navigation, Autoplay];
const SWIPER_AUTOPLAY = {delay: 3000, disableOnInteraction: true};
const INLINE_MARKDOWN = {forceInline: true};

/** Pre-render one static page per project so deep links work on GitHub Pages. */
export function getStaticPaths() {
    return {
        paths: projects.map((project) => ({params: {slug: project.id}})),
        fallback: false,
    };
}

export function getStaticProps({params}) {
    const project = getProjectById(params.slug);
    if (!project) return {notFound: true};
    return {props: {project}};
}

function ProjectSidebar({project}) {
    return (
        <div className="position-sticky top-0">
            <div>
                <div className="d-flex flex-column gap-5  brn4 p-3 p-md-5 rounded">
                    <div>
                        <span className="n4-color fs-eight fw-medium d-block">Images Count:</span>
                        <span className="n5-color fs-six fw-medium">
                            <span className="n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3">
                                {project.galleryImages.length}
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className="n4-color fs-eight fw-medium d-block">Technologies</span>
                        <span className="n5-color fs-six fw-medium">{project.techStack.join(', ')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectGallery({images}) {
    return (
        <div className="overflow-hidden">
            <Swiper
                modules={SWIPER_MODULES}
                navigation
                spaceBetween={20}
                slidesPerView={1}
                className="portfolio-swiper my-5"
                autoplay={SWIPER_AUTOPLAY}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={image}>
                        <FramedImage src={image} alt={`Screenshot ${index + 1}`} variant="slide"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

function ProjectSections({sections}) {
    return (
        <div>
            {sections.map((section, index) => (
                <div key={section.heading} className="mb-8 mb-md-15" data-aos="fade-up">
                    <h2 className="fs-two fw-semibold n5-color mb-2 mb-md-4">{section.heading}</h2>
                    {/* div (not p): markdown renders block elements, which are invalid inside <p>. */}
                    <div className="text-seven n4-color mb-5 mb-md-10" style={{whiteSpace: 'pre-line'}}>
                        <Markdown>{section.description}</Markdown>
                    </div>

                    {section.images?.length > 0 && (
                        <div className="row g-3 g-md-6">
                            {section.images.map((imgSrc, imgIndex) => (
                                <div className="col-sm-6" key={imgSrc}>
                                    <FramedImage
                                        src={imgSrc}
                                        alt={`${section.heading} screenshot ${imgIndex + 1}`}
                                        variant="section"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default function PortfolioDetail({project}) {
    return (
        <>
            <Seo
                title={`${project.title} | Umer Portfolio`}
                description={project.projectSummary}
                socialTitle={project.title}
                socialDescription={project.projectSummary}
                path={getProjectHref(project)}
            />
            <div className="main-content w-100">
                <div className="overflow-visible">
                    <section className="pt-120 pb-120 mt-10 mt-lg-0 overflow-visible">
                        <div className="pb-60">
                            <div>
                                <div className="page-heading">
                                    <h3 className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
                                        Project Title: {project.title}
                                    </h3>
                                    <p className="fs-seven n5-color mb-4 mb-md-8 text-center">
                                        <Markdown options={INLINE_MARKDOWN}>{project.projectSummary}</Markdown>
                                    </p>
                                    <HireMeLink/>
                                </div>
                            </div>
                        </div>
                        <div className="container my-8 my-md-15">
                            <div className="row g-6">
                                <div className="col-12 col-xl-3">
                                    <ProjectSidebar project={project}/>
                                </div>
                                <div className="col-12 col-xl-9">
                                    <div className="project-details-content">
                                        <div>
                                            <ProjectGallery images={project.galleryImages}/>
                                        </div>
                                        <ProjectSections sections={project.sections}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CtaBanner
                            title="Let’s Work together on your next Project"
                            text="I am available for freelance projects. Hire me and get your project done."
                        />
                    </section>
                </div>
            </div>
        </>
    );
}

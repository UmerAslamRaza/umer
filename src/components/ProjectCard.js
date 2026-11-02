import Image from 'next/image';
import Link from 'next/link';
import FramedImage from '@/components/FramedImage';
import Icon from '@/components/icons';
import {getProjectHref} from '@/data/projects';
import {withBasePath} from '@/utils/basePath';

const THUMB_LINK_STYLE = {
    display: 'block',
    color: 'transparent',
    width: '100%',
    objectFit: 'cover',
};

/**
 * Card image. Phone-app screenshots (`thumbnailFit: "contain"`) are shown whole on a
 * blurred backdrop; everything else fills the card, anchored to the top.
 */
function Thumbnail({project}) {
    return (
        <div className="post-thumb">
            <div className="post-thumb-inner">
                {project.thumbnailFit === 'contain' ? (
                    <FramedImage src={project.thumbnail} alt={project.title} variant="card"/>
                ) : (
                    <Image
                        alt={project.title}
                        loading="lazy"
                        width={620}
                        height={357}
                        decoding="async"
                        className="w-100 p-2 project-thumb-cover"
                        style={{color: 'transparent'}}
                        src={withBasePath(project.thumbnail)}
                    />
                )}
            </div>
        </div>
    );
}

export default function ProjectCard({project, height}) {
    const href = getProjectHref(project);

    return (
        <div className="col-xl-6">
            <div>
                <div className="project-card">
                    <Link className="thumb d-block" href={href} style={{height, ...THUMB_LINK_STYLE}}>
                        {/* Rendered twice on purpose: the .post-thumb hover animation swaps between the two layers. */}
                        <Thumbnail project={project}/>
                        <Thumbnail project={project}/>
                    </Link>

                    <div className="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                        <div>
                            <div className="d-flex flex-wrap gap-1 gap-sm-2 align-items-center">
                                {project.techStack.map((tech) => (
                                    <span key={tech}
                                          className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <Link className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block" href={href}>
                                {project.title}
                            </Link>
                        </div>
                        <Link className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                              href={href} aria-label={project.title}>
                            <i className="n5-color"><Icon name="arrowUpRight"/></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

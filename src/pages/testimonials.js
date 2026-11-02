import Image from 'next/image';
import Icon from '@/components/icons';
import PillLink from '@/components/PillLink';
import SectionHeading from '@/components/SectionHeading';
import Seo from '@/components/Seo';
import {TestimonialAuthor, TestimonialCarousel, VideoTestimonialCarousel} from '@/components/TestimonialCarousel';
import {SCREENSHOT_TESTIMONIALS} from '@/data/testimonials';
import {withBasePath} from '@/utils/basePath';

function SubHeading({title}) {
    return (
        <div className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mt-8 mb-md-15">
            <SectionHeading title={title}/>
        </div>
    );
}

export default function Testimonials() {
    return (
        <>
            <Seo title="Umer" path="/testimonials"/>

            <div className="main-content w-100">
                <main>
                    <div className="overflow-hidden">
                        <section className="pt-120 pb-120 br-bottom-n3 mt-10 mt-lg-0">
                            <div className="container">
                                <div>
                                    <div className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15">
                                        <SectionHeading title="Testimonials" description="Hear What My Clients Have to Say"/>
                                        <PillLink href="/portfolio" className="h-100 text-nowrap" icon={<Icon name="arrowRight"/>}>
                                            View Portfolio
                                        </PillLink>
                                    </div>
                                </div>

                                <div className="mt-8 mt-md-15 overflow-x-hidden">
                                    <TestimonialCarousel/>
                                </div>

                                <SubHeading title="Video Testimonials"/>
                                <div className="mt-8 mt-md-15 overflow-x-hidden">
                                    <VideoTestimonialCarousel/>
                                </div>

                                <SubHeading title="Screenshots"/>
                                <div className="mt-8 mt-md-15 overflow-x-hidden">
                                    {SCREENSHOT_TESTIMONIALS.map((testimonial) => (
                                        <div key={testimonial.name}
                                             className="px-5 px-md-8 py-3 py-md-5 mb-8 bgn2-color box-shadow1 br-left-p1 position-relative mx-2 mx-md-4">
                                            <Image
                                                alt={`Testimonial from ${testimonial.name}`}
                                                loading="lazy"
                                                width={620}
                                                height={300}
                                                decoding="async"
                                                className="w-100 p-2"
                                                style={{color: 'transparent'}}
                                                src={withBasePath(testimonial.image)}
                                            />
                                            <TestimonialAuthor testimonial={testimonial} className="mt-3 mt-md-5"/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}

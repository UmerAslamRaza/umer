import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {TESTIMONIALS, VIDEO_TESTIMONIALS} from '@/data/testimonials';
import {withBasePath} from '@/utils/basePath';

const SWIPER_MODULES = [Pagination, Navigation, Autoplay];
const PAGINATION = {clickable: true};
const CARD_CLASSES = 'px-5 px-md-10 py-6 py-md-12 bgn2-color box-shadow1 br-left-p1 position-relative mx-2 mx-md-4';

export function TestimonialAuthor({testimonial, className = 'mt-4 mt-md-7'}) {
    return (
        <div className={`d-flex gap-3 align-items-center ${className}`}>
            <div>
                <span className="fs-eight d-block n5-color">{testimonial.name}</span>
                <span className="fs-nine d-block n5-color">{testimonial.location}</span>
            </div>
        </div>
    );
}

function Carousel({delay, children}) {
    return (
        <Swiper
            modules={SWIPER_MODULES}
            navigation
            pagination={PAGINATION}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{delay, disableOnInteraction: true}}
        >
            {children}
        </Swiper>
    );
}

/** Auto-playing slider of written client testimonials. */
export function TestimonialCarousel({testimonials = TESTIMONIALS}) {
    return (
        <Carousel delay={1000}>
            {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.name}>
                    <div className={CARD_CLASSES}>
                        <p className="n4-color fs-six">{testimonial.text}</p>
                        <TestimonialAuthor testimonial={testimonial}/>
                    </div>
                </SwiperSlide>
            ))}
        </Carousel>
    );
}

/** Slider of video testimonials. */
export function VideoTestimonialCarousel({testimonials = VIDEO_TESTIMONIALS}) {
    return (
        <Carousel delay={3000}>
            {testimonials.map((testimonial) => (
                <SwiperSlide key={`video-${testimonial.name}`}>
                    <div className={CARD_CLASSES}>
                        <video controls width="70%" className="w-100 rounded-3" style={{maxHeight: '450px'}}>
                            <source src={withBasePath(testimonial.video)} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <TestimonialAuthor testimonial={testimonial}/>
                    </div>
                </SwiperSlide>
            ))}
        </Carousel>
    );
}

import {useRef} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icon from '@/components/icons';
import SectionHeading from '@/components/SectionHeading';
import Seo from '@/components/Seo';
import {SocialIconLinks} from '@/components/SocialLinks';
import {CONTACT, PROFILE} from '@/data/site';

const SECTION_INTRO = 'Feel free to reach out I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.';

const CONTACT_DETAILS = [
    CONTACT.phone && {
        label: 'Phone',
        icon: 'deviceMobile',
        value: CONTACT.phone.display,
        href: CONTACT.phone.href,
    },
    {
        label: 'Location',
        icon: 'compass',
        value: PROFILE.location,
    },
    {
        label: 'Email',
        icon: 'envelopeOpen',
        iconClassName: 'ph ph-envelope-open',
        value: CONTACT.email,
        href: `mailto:${CONTACT.email}`,
    },
].filter(Boolean);

const FORM_FIELDS = [
    [
        {name: 'name', type: 'text', placeholder: 'Your Name*', icon: 'ph-octagon'},
        {name: 'email', type: 'email', placeholder: 'Email address*', icon: 'ph-envelope'},
    ],
    [
        {name: 'phone', type: 'tel', placeholder: 'Phone*', icon: 'ph-device-mobile-camera'},
        {name: 'location', type: 'text', placeholder: 'Location*', icon: 'ph-map-pin'},
    ],
];

function ContactDetail({detail}) {
    const iconClasses = [detail.iconClassName, 'p1-color fs-one'].filter(Boolean).join(' ');

    return (
        <div className="d-flex gap-3 align-items-center p-3 p-md-5 br1-left">
            <i className={iconClasses}><Icon name={detail.icon}/></i>
            <div>
                <span className="n5-color fs-five fw-semibold d-block mb-1 mb-sm-2">{detail.label}</span>
                {detail.href
                    ? <a className="n4-color fs-nine" href={detail.href}>{detail.value}</a>
                    : <span className="n4-color fs-nine">{detail.value}</span>}
            </div>
        </div>
    );
}

function FormInput({field}) {
    return (
        <div className="d-flex align-items-center gap-2 py-2 py-md-4 rounded-2 brn4 w-100">
            <i className={`ph ${field.icon} p1-color fs-six mb-1`}></i>
            <input
                className="n5-color border-0"
                placeholder={field.placeholder}
                aria-label={field.placeholder.replace('*', '')}
                type={field.type}
                id={field.name}
                name={field.name}
                required
            />
        </div>
    );
}

export default function Contact() {
    const isSubmitting = useRef(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isSubmitting.current) return;

        const form = event.currentTarget;
        isSubmitting.current = true;

        try {
            const response = await fetch(CONTACT.formEndpoint, {
                method: 'POST',
                body: new FormData(form),
                headers: {Accept: 'application/json'},
            });

            if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);

            toast.success('Message sent Successfully!');
            form.reset();
        } catch {
            toast.error('Something went wrong, Please try to submit again.');
        } finally {
            isSubmitting.current = false;
        }
    };

    return (
        <>
            <Seo title="Contact" path="/contact"/>
            <div className="main-content w-100">
                <section className="pt-120 pb-120 mt-10 mt-lg-0">
                    <div>
                        <div className="pb-60 br-bottom-n3">
                            <div className="page-heading">
                                <h3 className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">Contact</h3>
                                <p className="fs-seven n5-color mb-4 mb-md-8 text-center">
                                    Have an idea? Let’s bring it to life. If you&apos;re looking for a passionate
                                    developer to help with your next project or you just want to chat I’m only a
                                    message away. Use the form below or email me directly at{' '}
                                    <a className="p1-color" href={`mailto:${CONTACT.email}`}> {CONTACT.email}</a>.{' '}
                                </p>
                                <SocialIconLinks className="d-flex flex-wrap justify-content-center gap-2 align-items-center mt-4"/>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-8 mt-md-15">
                        <div>
                            <SectionHeading title="Contact Details" description={SECTION_INTRO}/>
                        </div>
                        <div>
                            <div className="d-flex flex-wrap gap-3 gap-md-6 align-items-center justify-content-between mt-8 mt-md-15">
                                {CONTACT_DETAILS.map((detail) => <ContactDetail key={detail.label} detail={detail}/>)}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pb-120">
                    <div className="container">
                        <div>
                            <SectionHeading title="Get In Touch" description={SECTION_INTRO}/>
                        </div>
                        <div>
                            <form className="mt-8 mt-md-15 p-3 p-sm-5 p-md-10 rounded-5 brn4" onSubmit={handleSubmit}>
                                {FORM_FIELDS.map((row, rowIndex) => (
                                    <div key={rowIndex}
                                         className={`d-flex flex-wrap flex-md-nowrap gap-3 gap-md-6${rowIndex === 0 ? ' mb-3 mb-md-6' : ''}`}>
                                        {row.map((field) => <FormInput key={field.name} field={field}/>)}
                                    </div>
                                ))}

                                <div className="mt-3 mt-md-6">
                                    <textarea
                                        className="n5-color px-2 px-md-3 py-2 py-md-4 rounded-2 brn4 w-100 h-120"
                                        placeholder="Your Message:"
                                        aria-label="Your Message"
                                        id="message"
                                        name="message"
                                        required
                                    ></textarea>
                                </div>

                                <button className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill mt-5 mt-md-10"
                                        type="submit">
                                    Send Message
                                </button>
                            </form>
                            <ToastContainer position="top-right" autoClose={3000}/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

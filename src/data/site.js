/**
 * Site-wide profile, contact and SEO details.
 * Update personal info here and it is reflected on every page.
 */

export const SITE_URL = 'https://umeraslamraza.github.io/umer';

export const PROFILE = {
    name: 'Umer Aslam',
    fullName: 'Umer Aslam Raza',
    role: 'Senior Full Stack Developer',
    specialization: 'AI & Automation',
    location: 'Chemnitz, Germany',
    yearsOfExperience: 6,
    avatar: '/images/user.jpg',
    sidebarAvatar: '/images/user-side.jpg',
    resumeIcon: '/images/resume-icon.png',
    resumePdf: '/resume.pdf',
};

/** Full professional title, e.g. "Senior Full Stack Developer · AI & Automation". */
export const HEADLINE = `${PROFILE.role} · ${PROFILE.specialization}`;

export const CONTACT = {
    email: 'umeraslamraza1@gmail.com',
    // Optional. Set to null to hide the phone number everywhere, or e.g.
    // { href: 'tel:+4915112345678', display: '+49 151 12345678', displayCompact: '+4915112345678' }
    phone: null,
    // Formspree endpoint that receives submissions from the contact form.
    formEndpoint: 'https://formspree.io/f/mdkzeydq',
};

export const SOCIAL_LINKS = [
    {
        id: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/umer-aslam-raza-/',
        handle: 'linkedin.com/in/umer-aslam-raza-',
    },
    {
        id: 'github',
        label: 'GitHub',
        url: 'https://github.com/UmerAslamRaza',
        handle: 'github.com/UmerAslamRaza',
    },
];

export const SEO_DEFAULTS = {
    title: `${PROFILE.fullName} – ${PROFILE.role} Portfolio`,
    description: `Explore ${PROFILE.fullName}'s portfolio showcasing full-stack projects, client testimonials, and contact information.`,
    socialTitle: `${PROFILE.name} – ${PROFILE.role} Portfolio`,
    socialDescription: 'Showcasing modern web and mobile development projects, with client testimonials from across the globe.',
    image: `${SITE_URL}${PROFILE.sidebarAvatar}`,
};

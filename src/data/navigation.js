import projects from '@/data/projects';
import {TESTIMONIALS} from '@/data/testimonials';

/**
 * Sidebar / mobile navigation.
 * `icon` is used in the desktop sidebar, `mobileIcon` in the bottom bar (see components/icons.js).
 * `count` renders a badge; `showCountOnMobile` also shows it in the bottom bar on tablets.
 */
export const NAV_ITEMS = [
    {
        label: 'About Us',
        href: '/',
        icon: 'user',
        mobileIcon: 'userFill',
    },
    {
        label: 'Portfolio',
        href: '/portfolio',
        icon: 'code',
        mobileIcon: 'codeFill',
        count: projects.length,
        showCountOnMobile: true,
    },
    {
        label: 'Resume',
        href: '/resume',
        icon: 'notebook',
        mobileIcon: 'notebookFill',
    },
    {
        label: 'Testimonials',
        href: '/testimonials',
        icon: 'notebook',
        mobileIcon: 'notebook',
        count: TESTIMONIALS.length,
    },
    {
        label: 'Contact',
        href: '/contact',
        icon: 'envelope',
        mobileIcon: 'envelopeFill',
    },
];

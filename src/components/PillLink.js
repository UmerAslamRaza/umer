import Link from 'next/link';
import {withBasePath} from '@/utils/basePath';

const BASE_CLASSES = 'p-btn fw-medium px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2';

/**
 * Rounded call-to-action button link.
 * Page links use next/link (base path handled automatically). Pass `download`
 * for static files, which renders a plain <a> with the base path applied.
 */
export default function PillLink({
    href,
    icon,
    children,
    className = '',
    background = 'bg1-color',
    color = 'n11-color',
    download,
}) {
    const classes = [BASE_CLASSES, background, color, className].filter(Boolean).join(' ');

    if (download !== undefined) {
        return (
            <a className={classes} href={withBasePath(href)} download={download}>
                {icon}
                {children}
            </a>
        );
    }

    return (
        <Link className={classes} href={href}>
            {icon}
            {children}
        </Link>
    );
}

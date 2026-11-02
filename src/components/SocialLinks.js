import Icon from '@/components/icons';
import {SOCIAL_LINKS} from '@/data/site';

const EXTERNAL_LINK_PROPS = {target: '_blank', rel: 'noopener noreferrer'};

/** Round social icon buttons (sidebar, contact page). */
export function SocialIconLinks({className}) {
    return (
        <div className={className}>
            {SOCIAL_LINKS.map((social) => (
                <a key={social.id} className="social-icon" href={social.url} aria-label={social.label}
                   {...EXTERNAL_LINK_PROPS}>
                    <i className="p1-color"><Icon name={social.id}/></i>
                </a>
            ))}
        </div>
    );
}

/** Social icons with their handle as a label (resume footer). Order: GitHub first. */
export function SocialHandleLinks({className}) {
    const links = [...SOCIAL_LINKS].reverse();

    return (
        <div className={className}>
            {links.map((social) => (
                <a key={social.id} className="d-flex gap-1 align-items-center resume-icon" href={social.url}
                   {...EXTERNAL_LINK_PROPS}>
                    <div className="social-icon">
                        <i className="p1-color"><Icon name={social.id}/></i>
                    </div>
                    <span className="fs-eight n4-color">{social.handle}</span>
                </a>
            ))}
        </div>
    );
}

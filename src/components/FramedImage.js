import {withBasePath} from '@/utils/basePath';

/**
 * Shows an image of any aspect ratio in full inside a fixed frame, as a rounded
 * card over a blurred copy of itself. Styles: styles/media-frame.css.
 *
 * Plain <img> is used (rather than next/image) because the image must size to
 * its own natural aspect ratio for the rounded corners and shadow to hug it;
 * images are unoptimized in this static export anyway.
 *
 * `variant` is "slide" (detail page slider) or "section" (section screenshots).
 */
export default function FramedImage({src, alt, variant}) {
    const url = withBasePath(src);

    return (
        <div className={`media-frame media-frame--${variant}`}>
            <img src={url} alt="" aria-hidden="true" loading="lazy" decoding="async" className="media-frame__backdrop"/>
            <div className="media-frame__stage">
                <img src={url} alt={alt} loading="lazy" decoding="async" className="media-frame__img"/>
            </div>
        </div>
    );
}

import Head from 'next/head';
import {SEO_DEFAULTS, SITE_URL} from '@/data/site';

/**
 * Per-page <head> metadata. `path` is the page path without the base path
 * (e.g. "/resume"), used for the canonical/OG URL.
 */
export default function Seo({
    title = SEO_DEFAULTS.title,
    description = SEO_DEFAULTS.description,
    socialTitle = SEO_DEFAULTS.socialTitle,
    socialDescription = SEO_DEFAULTS.socialDescription,
    image = SEO_DEFAULTS.image,
    path = '/',
}) {
    const url = `${SITE_URL}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="canonical" href={url}/>

            <meta property="og:title" content={socialTitle}/>
            <meta property="og:description" content={socialDescription}/>
            <meta property="og:image" content={image}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={url}/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={socialTitle}/>
            <meta name="twitter:description" content={socialDescription}/>
            <meta name="twitter:image" content={image}/>
        </Head>
    );
}

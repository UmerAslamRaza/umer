import {Head, Html, Main, NextScript} from 'next/document';
import {THEME_INIT_SCRIPT} from '@/lib/theme';
import {withBasePath} from '@/utils/basePath';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href={withBasePath('/favicon.ico')} type="image/x-icon"/>
                <script dangerouslySetInnerHTML={{__html: THEME_INIT_SCRIPT}}/>
            </Head>
            {/* Font class referenced by styles-2.css */}
            <body className="__className_54b096">
                <Main/>
                <NextScript/>
            </body>
        </Html>
    );
}

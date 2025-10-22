import 'reset-css';
import '@/styles/globals.scss';
import { saveUtmParams } from '@/utils/utm';
import Script from 'next/script';

export const metadata = {
    title: 'Фундамент Незламності',
    keywords: [
        'Фундамент Незламності',
    ],
    authors: [{ name: 'Фундамент-Незламності' }],
    creator: 'Фундамент-Незламності',
    publisher: 'Фундамент-Незламності',
    robots: 'index, follow',

    icons: {
        icon: [
            { url: '/images/favicons/32.ico', sizes: '32x32', type: 'image/x-icon' }
        ],
        shortcut: [
            { url: '/images/favicons/32.ico', sizes: '32x32', type: 'image/x-icon' }
        ],
        apple: [
            { url: '/images/favicons/180.png', sizes: '180x180', type: 'image/png' }
        ],
        android: [
            { url: '/images/favicons/192.png', sizes: '192x192', type: 'image/png' }
        ],
    },
};

export default function RootLayout({ children }) {
    if (typeof window !== 'undefined') {
        saveUtmParams();
    }

    return (
        <html lang="uk">
        <head>
            {/* Google Tag Manager */}
            <Script id="gtm" strategy="afterInteractive">
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-WVGRRC9X');
                `}
            </Script>
            {/* End Google Tag Manager */}
        </head>
        <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
            dangerouslySetInnerHTML={{
                __html: `
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WVGRRC9X"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>
                `,
            }}
        />
        {/* End Google Tag Manager (noscript) */}

        {children}
        </body>
        </html>
    );
}
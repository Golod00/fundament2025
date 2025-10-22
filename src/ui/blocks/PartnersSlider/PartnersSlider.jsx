'use client';

import classes from './PartnersSlider.module.scss';

const logos = [
    '/images/partners/logo1.webp',
    '/images/partners/logo2.webp',
    '/images/partners/logo3.webp',
    '/images/partners/logo4.webp',
    '/images/partners/logo5.webp',
    '/images/partners/logo6.webp',
    '/images/partners/logo7.webp',
    '/images/partners/logo8.webp',
];

export default function PartnersSlider() {
    return (
        <section className={classes.slider}>
            <div className={classes.track}>
                {logos.concat(logos).map((logo, i) => (
                    <div key={i} className={classes.logo}>
                        <img src={logo} alt={`partner-${i}`} width={128} height={128} />
                    </div>
                ))}
            </div>
        </section>
    );
}
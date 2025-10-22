'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classes from './TextTitle.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function TextTitle({ children, type = 'div', className }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;

        gsap.fromTo(
            el,
            { opacity: 0, y: 40, scale: 0.95, filter: 'blur(6px)' },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                duration: 1.2,
                ease: 'power3.out', // плавное появление
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    const Tag = type;

    return (
        <Tag className={`${className} ${classes.element}`} ref={ref}>
            {children}
        </Tag>
    );
}
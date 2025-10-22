'use client';

import classes from './Button.module.scss';

export default function Button({
                                   children,
                                   type = 'filled',
                                   href = '#form',
                                   closeMenu,
                                   className,
                               }) {
    const isFilledClass = type === 'filled' ? classes.filled : classes.transparent;
    const buttonClass = `${classes.button} ${isFilledClass} ${className || ''}`;

    const handleClick = (e) => {
        if (href !== '#form') return;

        e.preventDefault();
        if (closeMenu) closeMenu();

        const form = document.querySelector('#form');
        if (form) {
            const headerOffset = 50;
            const elementPosition = form.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <a
            className={buttonClass}
            href={href}
            onClick={handleClick}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
            <span>{children}</span>
        </a>
    );
}
"use client";

import React from 'react';
import styles from './LogoSliderSection.module.css';

/**
 * Reusable LogoSlider component
 * @param {Array} logos - List of logo objects { id, src, alt }
 * @param {string} direction - 'left' or 'right'
 * @param {number} speed - Duration of one full loop in seconds
 */
const LogoSlider = ({ logos, direction = 'left', speed = 30 }) => {
    // Duplicate the logos to create a seamless infinite loop
    const duplicatedLogos = [...logos, ...logos];

    const animationClass = direction === 'left' ? styles.animateLeft : styles.animateRight;

    return (
        <div className={styles.sliderContainer}>
            <div
                className={`${styles.logoTrack} ${animationClass}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {duplicatedLogos.map((logo, index) => (
                    <div key={`${logo.id}-${index}`} className={styles.logoItem}>
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className={styles.logoImage}
                            draggable="false"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const LogoSliderSection = () => {
    const clientLogos = [
        { id: 1, src: '/assets/img/brands/emaar.jpg', alt: 'Client 1' },
        { id: 2, src: '/assets/img/brands/emaar.jpg', alt: 'Client 2' },
        { id: 3, src: '/assets/img/brands/emaar.jpg', alt: 'Client 3' },
        { id: 4, src: '/assets/img/brands/emaar.jpg', alt: 'Client 4' },
        { id: 5, src: '/assets/img/brands/emaar.jpg', alt: 'Client 5' },
        { id: 6, src: '/assets/img/brands/emaar.jpg', alt: 'Client 6' },
        { id: 7, src: '/assets/img/brands/emaar.jpg', alt: 'Client 7' },
        { id: 8, src: '/assets/img/brands/emaar.jpg', alt: 'Client 8' },
    ];

    const architectLogos = [
        { id: 101, src: '/assets/img/brands/emaar.jpg', alt: 'Architect 1' },
        { id: 102, src: '/assets/img/brands/emaar.jpg', alt: 'Architect 2' },
        { id: 103, src: '/assets/img/brands/emaar.jpg', alt: 'Architect 3' },
        { id: 104, src: '/assets/img/brands/emaar.jpg', alt: 'Architect 4' },
        { id: 105, src: '/assets/img/brands/emaar.jpg', alt: 'Architect 5' },
        { id: 106, src: '/assets/img/brands/emaar.jpg', alt: 'Architect 6' },
        { id: 107, src: '/assets/img/brands/emaar.jpg', alt: 'Architect 7' },
        { id: 108, src: '/assets/img/brands/emaar.jpg', alt: 'Architect 8' },
    ];

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sliderWrapper}>
                <div className={styles.titleFrame}>
                    <h2 className={styles.sectionTitle}>Our Clients</h2>
                </div>
                <LogoSlider
                    logos={clientLogos}
                    direction="right"
                    speed={25}
                />
            </div>
            <div className={styles.sliderWrapper}>
                <div className={styles.titleFrame}>
                    <h2 className={styles.sectionTitle}>Our Architects</h2>
                </div>
                <LogoSlider
                    logos={architectLogos}
                    direction="left"
                    speed={20}
                />
            </div>
        </section>
    );
};

export default LogoSliderSection;

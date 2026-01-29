"use client";

import React, { useState, useEffect } from 'react';
import styles from './SolutionsSection.module.css';

const SolutionsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, src: '/smart_lock_1.png', alt: 'Smart Lock 1' },
        { id: 2, src: '/smart_lock_2.png', alt: 'Smart Lock 2' },
        { id: 3, src: '/smart_lock_3.png', alt: 'Smart Lock 3' },
    ];

    const features = [
        {
            id: 1,
            text: 'On Site Maintenance',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            )
        },
        {
            id: 2,
            text: '1 Year Replacement',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    <path d="M22 2a11 11 0 0 0-22 0" />
                    <path d="M16 11l-4 4-4-4" />
                    <path d="M12 5v10" />
                </svg>
            )
        },
        {
            id: 3,
            text: 'Original Equipment Manufacturers',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            )
        },
        {
            id: 4,
            text: 'We Aim Mobility',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            )
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.contentWrapper}>
                {/* Left Side: Circular Slider */}
                <div className={styles.leftSide}>
                    <div className={styles.sliderFrame}>
                        <div
                            className={styles.sliderTrack}
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {slides.map((slide) => (
                                <div key={slide.id} className={styles.slide}>
                                    <img src={slide.src} alt={slide.alt} />
                                </div>
                            ))}
                        </div>

                        <button className={`${styles.navArrow} ${styles.prev}`} onClick={prevSlide}>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <button className={`${styles.navArrow} ${styles.next}`} onClick={nextSlide}>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>

                    <div className={styles.dotsContainer}>
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className={styles.rightSide}>
                    <p className={styles.subtitle}>Our Solutions</p>
                    <h2 className={styles.mainTitle}>
                        Building Trust,<br />Driving Innovation
                    </h2>

                    <div className={styles.featureList}>
                        {features.map((feature) => (
                            <div key={feature.id} className={styles.featureItem}>
                                <div className={styles.iconCircle}>
                                    {feature.icon}
                                </div>
                                <span className={styles.featureText}>{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;

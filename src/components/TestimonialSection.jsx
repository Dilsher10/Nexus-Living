"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './TestimonialSection.module.css';

const testimonials = [
    {
        id: 1,
        quote: "The Neolux team went above and beyond to meet our needs. Their customer service is unparalleled, and their dedication to delivering high-quality results is evident in everything they do.",
        name: "Fiaz",
        role: "Home Owner",
        stars: 5,
    },
    {
        id: 2,
        quote: "Working with Neolux was a game-changer for our business. Their solutions helped us streamline our operations and achieve efficiency we never thought possible. Highly recommended!",
        name: "Afzal",
        role: "Home Owner",
        stars: 5,
    },
    {
        id: 3,
        quote: "Neolux delivered fresh perspectives and innovative solutions for our project. Their remarkable ability to blend creativity with practicality exceeded our expectations. We're thrilled with the results!",
        name: "Hamid",
        role: "Home Owner",
        stars: 5,
    },
    {
        id: 4,
        quote: "Very professional and reliable. The smart home automation they installed is top-notch and has made our lives much easier.",
        name: "Sarah",
        role: "Business Owner",
        stars: 5,
    },
    {
        id: 5,
        quote: "Excellent experience from start to finish. The team was knowledgeable and very helpful in choosing the right products for us.",
        name: "John",
        role: "Developer",
        stars: 5,
    },
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(testimonials.length);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    const sliderRef = useRef(null);
    const startXRef = useRef(0);
    const autoSlideTimerRef = useRef(null);

    // Clones for infinite scrolling: [Last Items] [Real Items] [First Items]
    const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getVisibleItems = () => {
        if (windowWidth <= 768) return 1;
        if (windowWidth <= 1024) return 2;
        return 3;
    };

    const visibleItems = getVisibleItems();
    const itemWidth = 100 / visibleItems;

    const startAutoSlide = useCallback(() => {
        stopAutoSlide();
        autoSlideTimerRef.current = setInterval(() => {
            handleNext();
        }, 5000);
    }, [currentIndex]);

    const stopAutoSlide = () => {
        if (autoSlideTimerRef.current) {
            clearInterval(autoSlideTimerRef.current);
        }
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
    };

    const handleTransitionEnd = () => {
        // When we reach clones, jump back to real items without transition
        if (currentIndex >= testimonials.length * 2) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex - testimonials.length);
        } else if (currentIndex < testimonials.length) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex + testimonials.length);
        }
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, [startAutoSlide]);

    // Touch/Mouse Handlers
    const onStart = (e) => {
        setIsDragging(true);
        setIsTransitioning(false);
        stopAutoSlide();
        startXRef.current = e.type.includes('touch') ? e.touches[0].pageX : e.pageX;
    };

    const onMove = (e) => {
        if (!isDragging) return;
        const currentX = e.type.includes('touch') ? e.touches[0].pageX : e.pageX;
        const diff = currentX - startXRef.current;
        setDragOffset(diff);
    };

    const onEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        setIsTransitioning(true);

        const threshold = 50;
        if (dragOffset < -threshold) {
            handleNext();
        } else if (dragOffset > threshold) {
            handlePrev();
        }

        setDragOffset(0);
        startAutoSlide();
    };

    // Calculate current translate percentage
    const translateX = -(currentIndex * itemWidth) + (dragOffset / (sliderRef.current?.offsetWidth || 1) * 100);

    return (
        <section className={styles.testimonialSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.subtitle}>TAILORED FOR YOU</p>
                    <h2 className={styles.title}>
                        Connecting You to Smarter Living<br />Solution
                    </h2>
                </div>

                <div
                    className={styles.sliderContainer}
                    ref={sliderRef}
                    onMouseDown={onStart}
                    onMouseMove={onMove}
                    onMouseUp={onEnd}
                    onMouseLeave={onEnd}
                    onTouchStart={onStart}
                    onTouchMove={onMove}
                    onTouchEnd={onEnd}
                >
                    <div
                        className={styles.sliderTrack}
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                            transform: `translateX(${translateX}%)`,
                            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
                        }}
                    >
                        {displayTestimonials.map((item, index) => (
                            <div key={`${item.id}-${index}`} className={styles.cardWrapper}>
                                <div className={styles.card}>
                                    <div className={styles.quoteText}>
                                        "{item.quote}"
                                    </div>
                                </div>
                                <div className={styles.cardFooter}>
                                    <div className={styles.stars}>
                                        {[...Array(item.stars)].map((_, i) => (
                                            <svg key={i} viewBox="0 0 24 24" fill="#FFC107" width="20" height="20">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <h4 className={styles.name}>{item.name}</h4>
                                    <p className={styles.role}>{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.dotsContainer}>
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.dot} ${currentIndex % testimonials.length === index ? styles.activeDot : ''}`}
                            onClick={() => {
                                setIsTransitioning(true);
                                setCurrentIndex(index + testimonials.length);
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;

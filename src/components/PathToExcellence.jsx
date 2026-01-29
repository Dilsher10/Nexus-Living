"use client";

import React from 'react';
import styles from './PathToExcellence.module.css';

const PathToExcellence = () => {
    const services = [
        {
            id: 1,
            title: "Smart Villas",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            ),
            description: "Transform your villa into an epitome of sophistication and innovation with Neolux's premier home automation solutions. Our bespoke packages elevate your space, seamlessly integrating cutting-edge technology for unmatched convenience, security, and luxury. Redefine modern living by infusing your villa with the latest smart systems, creating an environment that reflects both elegance and efficiency."
        },
        {
            id: 2,
            title: "Smart Apartments",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="2" width="18" height="20" rx="2" ry="2" />
                    <line x1="9" y1="22" x2="9" y2="2" />
                    <line x1="15" y1="22" x2="15" y2="2" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <line x1="3" y1="14" x2="21" y2="14" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            ),
            description: "Neolux goes beyond villas to offer premium home automation solutions for apartments. Enhance your living space with our range of stylish products, including smart lighting, energy-efficient thermostats, security systems, and more — delivering both luxury and practicality at the best value. With Neolux Smart, transform your apartment into a modern, connected home where cutting-edge technology meets elegant design."
        },
        {
            id: 3,
            title: "Smart Offices",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
                </svg>
            ),
            description: "Enhance your workplace with Neolux's smart office solutions, including cutting-edge digital door locks for secure and convenient entry and exit. Designed to optimize energy efficiency, improve security, and streamline daily processes, our technology adapts seamlessly to the evolving needs of your organization. Create a dynamic, efficient, and secure work environment, empowering your team while reducing operational costs and ensuring hassle-free access with our advanced security systems."
        }
    ];

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.mainTitle}>
                    Streamlining Your Path to Excellence
                </h2>

                <div className={styles.grid}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.item}>
                            <div className={styles.iconHeader}>
                                <div className={styles.iconCircle}>
                                    {service.icon}
                                </div>
                                <div className={styles.horizontalLine} />
                            </div>
                            <h3 className={styles.itemTitle}>{service.title}</h3>
                            <p className={styles.itemDescription}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PathToExcellence;

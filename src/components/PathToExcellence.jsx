"use client";

import React from 'react';
import styles from './PathToExcellence.module.css';

const PathToExcellence = () => {
    const services = [
        {
            id: 1,
            title: "Modern Villas",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            ),
            description: "Upgrade your villa into a Place of comfort and innovation with Nexus Living. Experience seamless modern technology, convenience, safety, and style—all in one smart, secure home. Enjoy a higher standard of living as your home becomes smarter, more secure, and effortlessly stylish with cutting-edge automation designed specifically for modern villas."
        },
        {
            id: 2,
            title: "Modern Apartments",
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
            description: "Nexus brings smart living to apartments with advanced automation solutions you can rely on. Enhance your everyday life with features like smart lighting, energy-efficient thermostats, and advanced security systems. Our solutions combine luxury with functionality, making your apartment a connected, efficient home where technology works naturally with modern design."
        },
        {
            id: 3,
            title: "Modern Offices",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
                </svg>
            ),
            description: "Transform your workplace with Nexus smart office solutions, including secure digital locks and intelligent access controls. Our technology improves daily operations, strengthens security, and increases energy efficiency. Tailored to your organization’s needs, these solutions create a safe, productive, and modern workspace while cutting costs and improving overall efficiency."
        }
    ];

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.mainTitle}>
                    Smart Solutions for Every Space
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

"use client";

import React from 'react';
import styles from './HowItWorksSection.module.css';

const HowItWorksSection = () => {
    const steps = [
        {
            id: 1,
            title: "Installation",
            image: "/hiw_installation.png"
        },
        {
            id: 2,
            title: "Configuration",
            image: "/hiw_configuration.png"
        },
        {
            id: 3,
            title: "Support",
            image: "/hiw_support.png"
        }
    ];

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.mainTitle}>How it works</h2>

                <div className={styles.grid}>
                    {steps.map((step) => (
                        <div key={step.id} className={styles.card}>
                            <div className={styles.imageFrame}>
                                <img src={step.image} alt={step.title} />
                            </div>
                            <h3 className={styles.cardTitle}>{step.title}</h3>
                        </div>
                    ))}
                </div>

                <div className={styles.buttonContainer}>
                    <button className={styles.contactButton}>
                        Contact us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;

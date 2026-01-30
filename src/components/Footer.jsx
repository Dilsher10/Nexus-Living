"use client";
import React from 'react'

const Footer = () => {
    return (
        <footer className="mry-footer">
            <div className="container">
                <div className="mry-main-title mry-title-center mry-p-0-100">
                    <div className="mry-subtitle mry-mb-20 mry-fo"></div>
                    <h2 className="mry-h1 mry-mb-20 mry-fo">
                        Do you have <span className="mry-border-text">a project?</span>
                    </h2>
                    <div className="mry-text mry-mb-30  mry-fo">
                        Tell us about your idea, and we’ll help turn it into a smart, functional solution.
                    </div>
                    <div className="mry-fo">
                        <a
                            href="/contact"
                            className="mry-anima-link mry-btn mry-btn-color mry-default-link"
                        >
                            Let's discuss
                        </a>
                        <a
                            href=""
                            className="mry-anima-link  mry-btn-text mry-default-link"
                        >
                            Portfolio
                        </a>
                    </div>
                </div>
            </div>
            <div className="mry-footer-copy">
                <div className="container">
                    <div>Nexus Living © 2026</div>
                    <ul className="mry-social">
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=61583320663100">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/nexus.smartliving/">
                                <i className="fab fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/923097863987">
                                <i className="fab fa-whatsapp" />
                            </a>
                        </li>
                    </ul>
                    <div>
                        By:{" "}
                        <a
                            href="https://codeanddesigngroup.com/"
                            className="mry-default-link"
                            target="_blank"
                        >
                            codeanddesigngroup.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
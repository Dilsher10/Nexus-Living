"use client";
import React from 'react'

const Footer = () => {
    return (
        <footer className="mry-footer">
            <div className="container">
                <div className="mry-main-title mry-title-center mry-p-0-100">
                    <div className="mry-subtitle mry-mb-20 mry-fo">Call to action</div>
                    <h2 className="mry-h1 mry-mb-20 mry-fo">
                        Do you have <span className="mry-border-text">a project?</span>
                    </h2>
                    <div className="mry-text mry-mb-30  mry-fo">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                        Asperiores, cupiditate?
                    </div>
                    <div className="mry-fo">
                        <a
                            href="contact.html"
                            className="mry-anima-link mry-btn mry-btn-color mry-default-link"
                        >
                            Let's discuss
                        </a>
                        <a
                            href="portfolio-grid-1.html"
                            className="mry-anima-link  mry-btn-text mry-default-link"
                        >
                            Portfolio
                        </a>
                    </div>
                </div>
            </div>
            <div className="mry-footer-copy">
                <div className="container">
                    <div>Mireya © early 2021</div>
                    <ul className="mry-social">
                        <li>
                            <a href="#.">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a href="#.">
                                <i className="fab fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="#.">
                                <i className="fab fa-behance" />
                            </a>
                        </li>
                        <li>
                            <a href="#.">
                                <i className="fab fa-dribbble" />
                            </a>
                        </li>
                    </ul>
                    <div>
                        By:{" "}
                        <a
                            href="https://themeforest.net/user/ultimatewebsolutions/"
                            className="mry-default-link"
                            target="_blank"
                        >
                            UWS
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
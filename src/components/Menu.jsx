"use client";
import React from 'react'

const Menu = () => {
    return (
        <div className="mry-menu">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-4">
                        <nav id="mry-dynamic-menu">
                            <ul>
                                <li className="menu-item current-menu-item">
                                    <a href="/" className="mry-default-link">
                                        Home
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="about"
                                        className="mry-anima-link mry-default-link"
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <a href="products" className="mry-default-link">
                                        Products
                                    </a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="automation-smart-control" className="mry-anima-link mry-default-link">Automation / Smart Control</a></li>
                                        <li className="menu-item"><a href="lighting-solutions" className="mry-anima-link mry-default-link">Lighting Solutions</a></li>
                                        <li className="menu-item"><a href="smart-security" className="mry-anima-link mry-default-link">Smart Security</a></li>
                                        <li className="menu-item"><a href="non-smart-electrical" className="mry-anima-link mry-default-link">Non-Smart Electrical</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="mry-default-link">
                                        Works
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="contact"
                                        className="mry-anima-link mry-default-link"
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="mry-default-link">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-4">
                        <div className="mry-info-box-frame">
                            <div className="mry-info-box">
                                <div className="mry-mb-20">
                                    <div className="mry-label mry-mb-5">Country:</div>
                                    <div className="mry-text">Canada</div>
                                </div>
                                <div className="mry-mb-20">
                                    <div className="mry-label mry-mb-5">City:</div>
                                    <div className="mry-text">Toronto</div>
                                </div>
                                <div className="mry-mb-20">
                                    <div className="mry-label mry-mb-5">Adress:</div>
                                    <div className="mry-text">HTGS 4456 North Av.</div>
                                </div>
                                <div className="mry-mb-20">
                                    <div className="mry-label mry-mb-5">Email:</div>
                                    <a className="mry-text" href="mailto:mireya.inbox@mail.com">
                                        mireya.inbox@mail.com
                                    </a>
                                </div>
                                <div className="mry-mb-20">
                                    <div className="mry-label mry-mb-5">Phone:</div>
                                    <a className="mry-text" href="#.">
                                        +4 9(054) 996 84 25
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
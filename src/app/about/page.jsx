"use client";
import Footer from "../../components/Footer";

const About = () => {
    return (
        <div className="transition-fade">
            <div className="mry-content-frame" id="scroll">
                <canvas className="mry-dots" style={{ display: "none" }} />
                <div className="mry-head-bg">
                    <img src="/assets/img/dark/projects/prjct-7/1.jpg" alt="background" />
                    <div className="mry-bg-overlay" />
                </div>
                <div className="mry-banner mry-p-140-0">
                    <div className="container">
                        <div className="mry-main-title mry-title-center">
                            <div className="mry-subtitle mry-mb-20 mry-fo">About Us</div>
                            <h1 className="mry-mb-20 mry-fo">
                                Design With Purpose
                                <br />
                                <span className="mry-border-text">Built to Perform.</span>
                                <span className="mry-animation-el" />
                            </h1>
                            <div className="mry-text mry-fo">
                                Redefining the balance between technology and lifestyle. At Nexus Living, <br/> we don’t just install gadgets; we design environments that anticipate your needs.
                            </div>
                        </div>
                    </div>
                </div>
                {/* about */}
                <div className="mry-about mry-p-100-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="mry-mb-100 mry-text-center">
                                    <div className="mry-numbering mry-fo">
                                        <div className="mry-border-text">01</div>
                                        <div className="mry-subtitle">Who We Are</div>
                                    </div>
                                    <h3 className="mry-mb-40 mry-fo">
                                        Where smart design meets modern living in Pakistan
                                    </h3>
                                    <p className="mry-text mry-fo">
                                        Nexus Living is a luxury home-automation company based in Islamabad, dedicated to transforming traditional houses into intuitive, self-thinking homes. While others focus on hardware, we focus on the experience. We believe that true technology shouldn’t be seen; it should be felt through comfort, efficiency, and absolute peace of mind.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="mry-mb-100 mry-text-center">
                                    <div className="mry-numbering mry-fo">
                                        <div className="mry-border-text">02</div>
                                        <div className="mry-subtitle">What wy do?</div>
                                    </div>
                                    <h3 className="mry-mb-40 mry-fo">
                                       We Bridge the Gap Between Complexity and Comfort
                                    </h3>
                                    <p className="mry-text mry-fo">
                                        We take pride in being more than just a service provider; we are your long-term technology partners. Whether it’s a single-room upgrade or a full-scale villa automation, we handle the design, integration, and ongoing support so you never have to worry about the "how"—you just enjoy the "wow."
                                    </p>
                                    <p className="mry-text mry-fo">
                                        Contact us today for your{" "}
                                        <a href="/contact" className="mry-default-link">
                                            free consultation
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                {/* <div className="mry-about-video mry-mb-100 mry-fo">
                                    <div className="mry-video-cover-frame">
                                        <img
                                            className="mry-video-cover"
                                            src="/assets/img/dark/content/video.jpg"
                                            alt="banner"
                                        />
                                        <div className="mry-cover-overlay" />
                                        <div className="mry-play-button mry-magnetic-link">
                                            <a
                                                className="mry-magnetic-object"
                                                data-fancybox=""
                                                href="https://vimeo.com/25428289"
                                            >
                                                <i className="fas fa-play" />
                                            </a>
                                        </div>
                                        <div className="mry-curtain" />
                                    </div>
                                </div> */}
                            </div>
                            <div className="col-lg-8">
                                <div className="mry-numbering mry-fo">
                                    <div className="mry-border-text">03</div>
                                    <div className="mry-subtitle">Our Specialized Services</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mry-text-center mry-mb-100">
                                            <h4 className="mry-mb-20 mry-fo">
                                                Automation & Smart <br/> Control
                                            </h4>
                                            <p className="mry-text mry-mb-20 mry-fo">
                                                Centralize your world. Control your entire home—from curtains to home theaters—via a single touch panel or your voice. We make confusing systems simple.
                                            </p>
                                            <div className="mry-fo">
                                                <a
                                                    href="/contact"
                                                    className="mry-link mry-default-link"
                                                >
                                                    Order a service
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mry-text-center mry-mb-100">
                                            <h4 className="mry-mb-20 mry-fo">
                                                Intelligent Lighting <br/> Solutions
                                            </h4>
                                            <p className="mry-text mry-fo">
                                                Lighting isn't just about visibility; it's about ambiance. Our smart lighting designs save energy while automatically creating the perfect feel for every occasion.
                                            </p>
                                            <div className="mry-fo">
                                                <a
                                                    href="/contact"
                                                    className="mry-link mry-default-link"
                                                >
                                                    Order a service
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mry-text-center mry-mb-100">
                                            <h4 className="mry-mb-20 mry-fo">
                                                Advanced Smart <br/> Security
                                            </h4>
                                            <p className="mry-text mry-fo">
                                                Protect what matters most with AI-driven surveillance, biometric access, and 24/7 mobile alerts. Your home watches over you, even when you’re away.
                                            </p>
                                            <div className="mry-fo">
                                                <a
                                                    href="/contact"
                                                    className="mry-link mry-default-link"
                                                >
                                                    Order a service
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mry-text-center mry-mb-100">
                                            <h4 className="mry-mb-20 mry-fo">
                                                Bespoke Electrical <br/> Design
                                            </h4>
                                            <p className="mry-text mry-fo">
                                                We bridge the gap between traditional electrical engineering and modern smart tech, ensuring your home’s infrastructure is future-proof and aesthetically flawless.
                                            </p>
                                            <div className="mry-fo">
                                                <a
                                                    href="/contact"
                                                    className="mry-link mry-default-link"
                                                >
                                                    Order a service
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="mry-mb-100 mry-text-center">
                                    <div className="mry-numbering mry-fo">
                                        <div className="mry-border-text">04</div>
                                        <div className="mry-subtitle">Why Partner With Us?</div>
                                    </div>
                                    <h3 className="mry-mb-40 mry-fo">
                                        Technology Changes. Our Commitment Doesn’t
                                    </h3>
                                    <p className="mry-text mry-fo">
                                        In an industry full of “install-and-forget” solutions, Nexus Living stands apart. We deliver transparent processes, expert guidance, and a Gold-Standard Aftercare Guarantee—so your home stays smart, efficient, and stress-free. With deep local expertise in Islamabad, we ensure every project enhances your lifestyle and adds lasting value to your home.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mry-main-title mry-title-center mry-p-0-40">
                                    <div className="mry-numbering mry-fo">
                                        <div className="mry-border-text">05</div>
                                        <div className="mry-subtitle">Testimonials</div>
                                    </div>
                                    <h2 className="mry-fo">Our Customers Say</h2>
                                    <div className="mry-arrows">
                                        <div className="mry-sl-nav mry-fo">
                                            <div className="mry-prev mry-button-testimonials-prev mry-magnetic-link">
                                                <span className="mry-magnetic-object">
                                                    <i className="fas fa-arrow-left" />
                                                </span>
                                            </div>
                                            <div className="mry-next mry-button-testimonials-next mry-magnetic-link">
                                                <span className="mry-magnetic-object">
                                                    <i className="fas fa-arrow-right" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mry-label mry-fo">Slider Navigation</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="swiper-container mry-testimonials-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="mry-title-center">
                                                {/* <img
                                                    src="/assets/img/dark/clients/"
                                                    alt="client"
                                                    className="mry-reviewer mry-mb-20 mry-fo"
                                                /> */}
                                                <h4 className="mry-mb-20 mry-fo">Salman Malik</h4>
                                                <div className="mry-subtitle mry-mb-20 mry-fo">
                                                    Islamabad
                                                </div>
                                                <p className="mry-text mry-fo">
                                                    Nexus Living transformed my home into something out of a movie. The security features give my family peace of mind, and the lighting scenes are incredible. Best investment I've made.
                                                </p>
                                                <ul className="mry-star-rate mry-fo">
                                                    <li>
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mry-title-center">
                                                {/* <img
                                                    src="/assets/img/dark/clients/c-2.jpg"
                                                    alt="client"
                                                    className="mry-reviewer mry-mb-20 mry-fo"
                                                /> */}
                                                <h4 className="mry-mb-20 mry-fo">Sarah Shah</h4>
                                                <div className="mry-subtitle mry-mb-20 mry-fo">
                                                    Lahore
                                                </div>
                                                <p className="mry-text mry-fo">
                                                    I evaluated several automation companies in Pakistan, including Neolux, but chose Nexus for their attention to detail and personalized service. Their team is professional, and the app is so easy to use.
                                                </p>
                                                <ul className="mry-star-rate mry-fo">
                                                    <li>
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li className="mry-empty">
                                                        <i className="fas fa-star" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* about end */}
                <Footer />
                <div className="mry-head-bg mry-head-bottom">
                    <img src="/assets/img/dark/projects/prjct-5/1.jpg" alt="background" />
                    <div className="mry-bg-overlay" />
                </div>
            </div>
        </div>
    )
}

export default About
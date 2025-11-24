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
                                Design is Intelligence
                                <br />
                                <span className="mry-border-text">Made Visible.</span>
                                <span className="mry-animation-el" />
                            </h1>
                            <div className="mry-text mry-fo">
                                <b>Alina Wheeler</b> - Graphic Designer, Art Director.
                            </div>
                            <div className="mry-scroll-hint-frame">
                                <a
                                    className="mry-scroll-hint mry-smooth-scroll mry-magnetic-link mry-fo"
                                    href="#mry-anchor"
                                >
                                    <span className="mry-magnetic-object" />
                                </a>
                                <div className="mry-label mry-fo">Scroll Down</div>
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
                                        Mireya is an award winning full service marketing agency
                                    </h3>
                                    <p className="mry-text mry-fo">
                                        We has expertise in branding and brand strategy, website
                                        design, social media management, content marketing,
                                        pay-per-click advertising (PPC) and search engine optimization
                                        (SEO). As a leading website design company in Toronto we have
                                        expertise in WordPress design and development, e-commerce
                                        website design and development, Shopify website design and
                                        development and cater <br />
                                        to SMB and enterprise clients.
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
                                        Relationships come first, everything <br />
                                        else follows
                                    </h3>
                                    <p className="mry-text mry-fo">
                                        We take pride in having strong relationships with our clients.
                                        To us, business is more than just a handshake and a signed
                                        contract. Through our full suite of services, we help
                                        businesses reach their goals and maximize return on investment
                                        while focusing on transparency and communication.
                                    </p>
                                    <p className="mry-text mry-fo">
                                        Contact us today for your{" "}
                                        <a href="contact.html" className="mry-default-link">
                                            free consultation
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="mry-about-video mry-mb-100 mry-fo">
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
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="mry-numbering mry-fo">
                                    <div className="mry-border-text">03</div>
                                    <div className="mry-subtitle">Services</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mry-text-center mry-mb-100">
                                            <h4 className="mry-mb-20 mry-fo">
                                                Website design
                                                <br />
                                                &amp; Development
                                            </h4>
                                            <p className="mry-text mry-mb-20 mry-fo">
                                                Our work empowers businesses to create unique user
                                                experiences that engage, captivate, and deliver results.
                                                Need your website designed in Toronto?
                                            </p>
                                            <div className="mry-fo">
                                                <a
                                                    href="contact.html"
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
                                                Creative
                                                <br />
                                                &amp; Graphic Design
                                            </h4>
                                            <p className="mry-text mry-fo">
                                                We are experienced storytellers, with a knack for
                                                incorporating brand insights into compelling designs for
                                                use in digital and print advertising campaigns.
                                            </p>
                                            <div className="mry-fo">
                                                <a
                                                    href="contact.html"
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
                                                Brand Marketing
                                                <br />
                                                &amp; Strategy
                                            </h4>
                                            <p className="mry-text mry-fo">
                                                We help businesses construct their identity and develop a
                                                tailored and concise brand strategy that will appeal to
                                                your target audience.
                                            </p>
                                            <div className="mry-fo">
                                                <a
                                                    href="contact.html"
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
                                                Video Production
                                                <br />
                                                &amp; Marketing
                                            </h4>
                                            <p className="mry-text mry-fo">
                                                Our video production team films, produces, and edits
                                                content that will raise brand awareness, engagement, and
                                                conversion rates.
                                            </p>
                                            <div className="mry-fo">
                                                <a
                                                    href="contact.html"
                                                    className="mry-link mry-default-link"
                                                >
                                                    Order a service
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mry-main-title mry-title-center mry-p-0-40">
                                    <div className="mry-numbering mry-fo">
                                        <div className="mry-border-text">04</div>
                                        <div className="mry-subtitle">Employees</div>
                                    </div>
                                    <h2 className="mry-fo">Our Amazing Team</h2>
                                    <div className="mry-arrows mry-fo">
                                        <div className="mry-sl-nav">
                                            <div className="mry-prev mry-button-team-prev mry-magnetic-link">
                                                <span className="mry-magnetic-object">
                                                    <i className="fas fa-arrow-left" />
                                                </span>
                                            </div>
                                            <div className="mry-next mry-button-team-next mry-magnetic-link">
                                                <span className="mry-magnetic-object">
                                                    <i className="fas fa-arrow-right" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mry-label mry-fo">Slider Navigation</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="swiper-container mry-team-slider mry-mb-100">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="mry-team-member mry-text-center">
                                                <div className="mry-member-photo-frame mry-fo">
                                                    <img
                                                        src="/assets/img/dark/team/team-1.jpg"
                                                        alt="Team member"
                                                    />
                                                    <div className="mry-photo-overlay" />
                                                    <div className="mry-curtain" />
                                                </div>
                                                <h4 className="mry-mb-10 mry-fo">Viktoria Freeman</h4>
                                                <p className="mry-text mry-simple-text mry-fo">
                                                    UI/UX Designer
                                                </p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mry-team-member mry-text-center">
                                                <div className="mry-member-photo-frame mry-fo">
                                                    <img
                                                        src="/assets/img/dark/team/team-2.jpg"
                                                        alt="Team member"
                                                    />
                                                    <div className="mry-photo-overlay" />
                                                    <div className="mry-curtain" />
                                                </div>
                                                <h4 className="mry-mb-10 mry-fo">Paul Trueman</h4>
                                                <p className="mry-text mry-simple-text mry-fo">
                                                    UI/UX Designer
                                                </p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mry-team-member mry-text-center">
                                                <div className="mry-member-photo-frame mry-fo">
                                                    <img
                                                        src="/assets/img/dark/team/team-3.jpg"
                                                        alt="Team member"   
                                                    />
                                                    <div className="mry-photo-overlay" />
                                                    <div className="mry-curtain" />
                                                </div>
                                                <h4 className="mry-mb-10 mry-fo">Mike Oldman</h4>
                                                <p className="mry-text mry-simple-text mry-fo">
                                                    UI/UX Designer
                                                </p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mry-team-member mry-text-center">
                                                <div className="mry-member-photo-frame mry-fo">
                                                    <img
                                                        src="/assets/img/dark/team/team-4.jpg"
                                                        alt="Team member"
                                                    />
                                                    <div className="mry-photo-overlay" />
                                                    <div className="mry-curtain" />
                                                </div>
                                                <h4 className="mry-mb-10 mry-fo">Emma Newman</h4>
                                                <p className="mry-text mry-simple-text mry-fo">
                                                    UI/UX Designer
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="mry-mb-100 mry-text-center">
                                    <div className="mry-numbering mry-fo">
                                        <div className="mry-border-text">05</div>
                                        <div className="mry-subtitle">We can become partners</div>
                                    </div>
                                    <h3 className="mry-mb-40 mry-fo">
                                        We’re here to help, let us take it from here.
                                    </h3>
                                    <p className="mry-text mry-fo">
                                        We know that transparency is non-negotiable and that strong
                                        communication is the foundation of any great relationship.
                                        With the knowledge and expertise at Brand &amp; Mortar we are
                                        confident that we can make an impact on your business and its
                                        bottom line.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mry-main-title mry-title-center mry-p-0-40">
                                    <div className="mry-numbering mry-fo">
                                        <div className="mry-border-text">06</div>
                                        <div className="mry-subtitle">Testimonials</div>
                                    </div>
                                    <h2 className="mry-fo">Our customers say</h2>
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
                                                <img
                                                    src="/assets/img/dark/clients/c-1.jpg"
                                                    alt="client"
                                                    className="mry-reviewer mry-mb-20 mry-fo"
                                                />
                                                <h4 className="mry-mb-20 mry-fo">Emma Newman</h4>
                                                <div className="mry-subtitle mry-mb-20 mry-fo">
                                                    Creative director
                                                </div>
                                                <p className="mry-text mry-fo">
                                                    We evaluated numerous marketing firms and selected
                                                    Mireya due to their experience in the solar industry,
                                                    and the clear understanding of our business objectives
                                                    that they demonstrated during the evaluation process.{" "}
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
                                                <img
                                                    src="/assets/img/dark/clients/c-2.jpg"
                                                    alt="client"
                                                    className="mry-reviewer mry-mb-20 mry-fo"
                                                />
                                                <h4 className="mry-mb-20 mry-fo">Paul Trueman</h4>
                                                <div className="mry-subtitle mry-mb-20 mry-fo">
                                                    Creative director
                                                </div>
                                                <p className="mry-text mry-fo">
                                                    We were very impressed with the progressive campaign and
                                                    thought it spoke volumes to the reality of businesses.
                                                    We have been working our way into the Toronto area for
                                                    almost a year now and ready to gain some traction in
                                                    that city.
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
                                        <div className="swiper-slide">
                                            <div className="mry-title-center">
                                                <img
                                                    src="/assets/img/dark/clients/c-3.jpg"
                                                    alt="client"
                                                    className="mry-reviewer mry-mb-20 mry-fo"
                                                />
                                                <h4 className="mry-mb-20 mry-fo">Viktoria Freeman</h4>
                                                <div className="mry-subtitle mry-mb-20 mry-fo">
                                                    Creative director
                                                </div>
                                                <p className="mry-text mry-fo">
                                                    We were very impressed with the progressive campaign and
                                                    thought it spoke volumes to the reality of businesses.
                                                    We have been working our way into the Toronto area for
                                                    almost a year now and ready to gain some traction in
                                                    that city.
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
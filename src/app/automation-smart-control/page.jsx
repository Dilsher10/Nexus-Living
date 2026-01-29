"use client";
import Footer from "../../components/Footer";
import { data } from "../../data/products";

const AutomationSmartControl = () => {
    return (
        <div className="transition-fade">
            <div className="mry-content-frame" id="scroll">
                <canvas className="mry-dots" style={{ display: "none" }} />
                <div className="mry-head-bg">
                    <img src="/assets/img/dark/projects/prjct-6/1.jpg" alt="background" />
                    <div className="mry-bg-overlay" />
                </div>
                <div className="mry-banner mry-p-140-0">
                    <div className="container">
                        <div className="mry-main-title mry-title-center">
                            <div className="mry-subtitle mry-mb-20 mry-fo">Portfolio</div>
                            <h1 className="mry-mb-20 mry-fo">
                                Explore Our Amazing
                                <br />
                                <span className="mry-border-text">Professional Cases</span>
                                <span className="mry-animation-el" />
                            </h1>
                            <div className="mry-text mry-fo">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </div>
                        </div>
                    </div>
                </div>
                {/* portfolio */}
                <div className="mry-portfolio mry-p-100-100">
                    <div className="container">
                        <div className="mry-filter mry-mb-40 mry-fo">
                            <a
                                href="#"
                                data-filter="*"
                                className="mry-card-category mry-default-link"
                            >
                                All Categories
                            </a>
                            <a
                                href="#"
                                data-filter=".automation-smart-control"
                                className="mry-card-category mry-default-link mry-current"
                            >
                                Automation / Smart Control
                            </a>
                            <a
                                href="#"
                                data-filter=".lighting-solutions"
                                className="mry-card-category mry-default-link"
                            >
                                Lighting Solutions
                            </a>
                            <a
                                href="#"
                                data-filter=".smart-security"
                                className="mry-card-category mry-default-link"
                            >
                                Smart Security
                            </a>
                            <a
                                href="#"
                                data-filter=".non-smart-electrical"
                                className="mry-card-category mry-default-link"
                            >
                                Non-Smart Electrical
                            </a>
                        </div>
                        <div className="mry-portfolio-frame">
                            <div className="mry-masonry-grid mry-3-col">
                                <div className="mry-grid-sizer" />
                                {
                                    data.map((item, index) => (
                                        <div key={index} className={`mry-masonry-grid-item mry-masonry-grid-item-33 ${item.slug}`}>
                                            <div className="mry-card-item">
                                                <div className="mry-card-cover-frame mry-mb-20 mry-fo">
                                                    <div className="mry-badge">{item.category}</div>
                                                    <div className="mry-cover-overlay" />
                                                    <img src={`/assets/img/products/${item.id}/thumbnail.png`} alt="project" />
                                                    <div className="mry-hover-links">
                                                        <a
                                                            href={`/assets/img/products/${item.id}/thumbnail.png`}
                                                            data-fancybox="works"
                                                            className="mry-zoom mry-magnetic-link"
                                                        >
                                                            <span className="mry-magnetic-object">
                                                                <i className="fas fa-expand" />
                                                            </span>
                                                        </a>
                                                        <a
                                                            href={`/products/${item.id}`}
                                                            className="mry-more mry-magnetic-link mry-anima-link"
                                                        >
                                                            <span className="mry-magnetic-object">
                                                                <i className="fas fa-arrow-right" />
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="mry-item-descr mry-fo">
                                                    <h4 className="mry-mb-10">
                                                        <a href={`/products/${item.id}`}>{item.title} {item.span}</a>
                                                    </h4>
                                                    <div className="mry-text">
                                                        {item.thumbnailText}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* portfolio end */}
                <Footer />
                {/* footer end */}
                <div className="mry-head-bg mry-head-bottom">
                    <img src="/assets/img/dark/projects/prjct-2/1.jpg" alt="background" />
                    <div className="mry-bg-overlay" />
                </div>
            </div>
        </div>
    )
}

export default AutomationSmartControl;
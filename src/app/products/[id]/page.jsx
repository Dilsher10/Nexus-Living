"use client";
import { useParams } from "next/navigation";
import Footer from "../../../components/Footer";
import { data } from "../../../data/products";

const ProductDetails = () => {
    const { id } = useParams();
    const product = data.find((item) => item.id === parseInt(id));
    if (!product) {
        return <h2>Product not found</h2>;
    }
    return (
        <div className="transition-fade">
            <div className="mry-content-frame" id="scroll">
                <canvas className="mry-dots" style={{ display: "none" }} />
                <div className="mry-head-bg">
                    <img src={`/assets/img/products/${product.id}/banner.png`} alt="background" />
                    <div className="mry-bg-overlay" />
                </div>
                <div className="mry-banner mry-p-140-0">
                    <div className="container">
                        <div className="mry-main-title mry-title-center">
                            <div className="mry-subtitle mry-mb-20 mry-fo">{product.category}</div>
                            <h1 className="mry-mb-20 mry-fo">
                                {product.title}
                                <br />
                                <span className="mry-border-text">{product.span}</span>
                                <span className="mry-animation-el" />
                            </h1>
                            <div className="mry-text mry-fo">{product.bannerText}</div>
                            {/* <div className="mry-scroll-hint-frame">
                                <a
                                    className="mry-scroll-hint mry-smooth-scroll mry-magnetic-link mry-fo"
                                    href="#mry-anchor"
                                >
                                    <span className="mry-magnetic-object" />
                                </a>
                                <div className="mry-label mry-fo">Scroll Down</div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* project */}
                <div className="mry-about mry-p-100-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="mry-mb-100 mry-text-center">
                                    <div className="mry-numbering mry-fo">
                                        <div className="mry-border-text">01</div>
                                        <div className="mry-subtitle">Goal</div>
                                    </div>
                                    <h3 className="mry-mb-40 mry-fo">
                                        {product.headline1}
                                    </h3>
                                    <p className="mry-text mry-fo">
                                        {product.para1}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mry-main-title mry-title-center mry-p-0-40">
                                    <div className="mry-numbering mry-fo">
                                        <div className="mry-border-text">02</div>
                                        <div className="mry-subtitle">Project</div>
                                    </div>
                                    <h2 className="mry-fo">Project gallery</h2>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mry-portfolio-frame">
                                    <div className="mry-masonry-grid mry-without-descr mry-p-0-100">
                                        <div className="mry-grid-sizer" />
                                        {product.gallery?.includes("1.png") && (
                                            <div className="mry-masonry-grid-item mry-masonry-grid-item-50 interior">
                                                <div className="mry-card-item">
                                                    <div className="mry-card-cover-frame mry-mb-20 mry-fo">
                                                        <img
                                                            src={`/assets/img/products/${product.id}/1.png`}
                                                            alt="project"
                                                        />
                                                        <div className="mry-cover-overlay" />
                                                        <div className="mry-hover-links">
                                                            <a
                                                                href={`/assets/img/products/${product.id}/1.png`}
                                                                data-fancybox="works"
                                                                className="mry-zoom mry-magnetic-link"
                                                            >
                                                                <span className="mry-magnetic-object">
                                                                    <i className="fas fa-expand" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {product.gallery?.includes("5.png") && (
                                            <div className="mry-masonry-grid-item mry-masonry-grid-item-50 mry-masonry-grid-item-h-x-2 repair">
                                                <div className="mry-card-item">
                                                    <div className="mry-card-cover-frame mry-mb-20 mry-fo">
                                                        <img
                                                            src={`/assets/img/products/${product.id}/5.png`}
                                                            alt="project"
                                                        />
                                                        <div className="mry-cover-overlay" />
                                                        <div className="mry-hover-links">
                                                            <a
                                                                href={`/assets/img/products/${product.id}/5.png`}
                                                                data-fancybox="works"
                                                                className="mry-zoom mry-magnetic-link"
                                                            >
                                                                <span className="mry-magnetic-object">
                                                                    <i className="fas fa-expand" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {product.gallery?.includes("2.png") && (
                                            <div className="mry-masonry-grid-item mry-masonry-grid-item-50 interior">
                                                <div className="mry-card-item">
                                                    <div className="mry-card-cover-frame mry-mb-20 mry-fo">
                                                        <img
                                                            src={`/assets/img/products/${product.id}/2.png`}
                                                            alt="project"
                                                        />
                                                        <div className="mry-cover-overlay" />
                                                        <div className="mry-hover-links">
                                                            <a
                                                                href={`/assets/img/products/${product.id}/2.png`}
                                                                data-fancybox="works"
                                                                className="mry-zoom mry-magnetic-link"
                                                            >
                                                                <span className="mry-magnetic-object">
                                                                    <i className="fas fa-expand" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {product.gallery?.includes("6.png") && (
                                            <div className="mry-masonry-grid-item mry-masonry-grid-item-50 mry-masonry-grid-item-h-x-2 repair">
                                                <div className="mry-card-item">
                                                    <div className="mry-card-cover-frame mry-mb-20 mry-fo">
                                                        <img
                                                            src={`/assets/img/products/${product.id}/6.png`}
                                                            alt="project"
                                                        />
                                                        <div className="mry-cover-overlay" />
                                                        <div className="mry-hover-links">
                                                            <a
                                                                href={`/assets/img/products/${product.id}/6.png`}
                                                                data-fancybox="works"
                                                                className="mry-zoom mry-magnetic-link"
                                                            >
                                                                <span className="mry-magnetic-object">
                                                                    <i className="fas fa-expand" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {product.gallery?.includes("3.png") && (
                                            <div className="mry-masonry-grid-item mry-masonry-grid-item-50 interior">
                                                <div className="mry-card-item">
                                                    <div className="mry-card-cover-frame mry-mb-20 mry-fo">
                                                        <img
                                                            src={`/assets/img/products/${product.id}/3.png`}
                                                            alt="project"
                                                        />
                                                        <div className="mry-cover-overlay" />
                                                        <div className="mry-hover-links">
                                                            <a
                                                                href={`/assets/img/products/${product.id}/3.png`}
                                                                data-fancybox="works"
                                                                className="mry-zoom mry-magnetic-link"
                                                            >
                                                                <span className="mry-magnetic-object">
                                                                    <i className="fas fa-expand" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {product.gallery?.includes("4.png") && (
                                            <div className="mry-masonry-grid-item mry-masonry-grid-item-50 interior">
                                                <div className="mry-card-item">
                                                    <div className="mry-card-cover-frame mry-mb-20 mry-fo">
                                                        <img
                                                            src={`/assets/img/products/${product.id}/4.png`}
                                                            alt="project"
                                                        />
                                                        <div className="mry-cover-overlay" />
                                                        <div className="mry-hover-links">
                                                            <a
                                                                href={`/assets/img/products/${product.id}/4.png`}
                                                                data-fancybox="works"
                                                                className="mry-zoom mry-magnetic-link"
                                                            >
                                                                <span className="mry-magnetic-object">
                                                                    <i className="fas fa-expand" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="mry-mb-100 mry-text-center">
                                    <div className="mry-numbering mry-fo">
                                        <div className="mry-border-text">03</div>
                                        <div className="mry-subtitle">Result</div>
                                    </div>
                                    <h3 className="mry-mb-40 mry-fo">
                                        {product.headline2}
                                    </h3>
                                    <p className="mry-text mry-fo">
                                        {product.para2}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mry-main-title mry-title-center mry-p-0-40">
                                    <div className="mry-subtitle mry-mb-20 mry-fo">
                                        More projects
                                    </div>
                                    <h2 className="mry-fo">Similar projects</h2>
                                    <div className="mry-arrows mry-fo">
                                        <div className="mry-sl-nav">
                                            <div className="mry-prev mry-button-blog-prev mry-magnetic-link">
                                                <span className="mry-magnetic-object">
                                                    <i className="fas fa-arrow-left" />
                                                </span>
                                            </div>
                                            <div className="mry-next mry-button-blog-next mry-magnetic-link">
                                                <span className="mry-magnetic-object">
                                                    <i className="fas fa-arrow-right" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mry-label mry-fo">Slider Navigation</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="swiper-container mry-blog-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="mry-card-item">
                                                <div className="mry-card-cover-frame mry-mb-20 mry-fo">
                                                    <div className="mry-badge">interior</div>
                                                    <img
                                                        src={`/assets/img/products/1/thumbnail.png`}
                                                        alt="project"
                                                    />
                                                    <div className="mry-cover-overlay" />
                                                    <div className="mry-hover-links">
                                                        <a
                                                            href="/assets/img/products/1/thumbnail.png"
                                                            data-fancybox="works-slider"
                                                            className="mry-zoom mry-magnetic-link"
                                                        >
                                                            <span className="mry-magnetic-object">
                                                                <i className="fas fa-expand" />
                                                            </span>
                                                        </a>
                                                        <a
                                                            href={`/products/1`}
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
                                                        <a href={`/products/1`}>Little Cottage</a>
                                                    </h4>
                                                    <div className="mry-text">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mry-card-item">
                                                <div className="mry-card-cover-frame mry-mb-20 mry-fo">
                                                    <div className="mry-badge">interior</div>
                                                    <img
                                                        src={`/assets/img/products/2/thumbnail.png`}
                                                        alt="project"
                                                    />
                                                    <div className="mry-cover-overlay" />
                                                    <div className="mry-hover-links">
                                                        <a
                                                            href="/assets/img/products/2/thumbnail.png"
                                                            data-fancybox="works-slider"
                                                            className="mry-zoom mry-magnetic-link"
                                                        >
                                                            <span className="mry-magnetic-object">
                                                                <i className="fas fa-expand" />
                                                            </span>
                                                        </a>
                                                        <a
                                                            href={`/products/2`}
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
                                                        <a href={`/products/2`}>Compact House</a>
                                                    </h4>
                                                    <div className="mry-text">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mry-card-item">
                                                <div className="mry-card-cover-frame mry-mb-20 mry-fo">
                                                    <div className="mry-badge">interior</div>
                                                    <img
                                                        src={`/assets/img/products/3/thumbnail.png`}
                                                        alt="project"
                                                    />
                                                    <div className="mry-cover-overlay" />
                                                    <div className="mry-hover-links">
                                                        <a
                                                            href="/assets/img/products/3/thumbnail.png"
                                                            data-fancybox="works-slider"
                                                            className="mry-zoom mry-magnetic-link"
                                                        >
                                                            <span className="mry-magnetic-object">
                                                                <i className="fas fa-expand" />
                                                            </span>
                                                        </a>
                                                        <a
                                                            href={`/products/3`}
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
                                                        <a href={`/products/3`}>Greenwell Yards</a>
                                                    </h4>
                                                    <div className="mry-text">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mry-card-item">
                                                <div className="mry-card-cover-frame mry-mb-20 mry-fo">
                                                    <div className="mry-badge">interior</div>
                                                    <img
                                                        src={`/assets/img/products/4/thumbnail.png`}
                                                        alt="project"
                                                    />
                                                    <div className="mry-cover-overlay" />
                                                    <div className="mry-hover-links">
                                                        <a
                                                            href="/assets/img/products/4/thumbnail.png"
                                                            data-fancybox="works-slider"
                                                            className="mry-zoom mry-magnetic-link"
                                                        >
                                                            <span className="mry-magnetic-object">
                                                                <i className="fas fa-expand" />
                                                            </span>
                                                        </a>
                                                        <a
                                                            href={`/products/4`}
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
                                                        <a href={`/products/4`}>Flat House</a>
                                                    </h4>
                                                    <div className="mry-text">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* project end */}
                <Footer />
                <div className="mry-head-bg mry-head-bottom">
                    <img src="/assets/img/dark/projects/prjct-2/fs/1.jpg" alt="background" />
                    <div className="mry-bg-overlay" />
                </div>
            </div>
        </div>
    );
}


export default ProductDetails;
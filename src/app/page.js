import { data } from "../data/products";

export default function Home() {
  return (
    <div className="transition-fade">
      <div className="mry-content-frame" id="scroll">
        {/* <canvas className="mry-dots" /> */}
        <div className="swiper-container mry-main-slider">
          <div className="swiper-wrapper">
            {
              data.slice(0, 4).map((product) => (
                <div className="swiper-slide" key={product.id}>
                  <div className="mry-project-slider-item">
                    <div className="mry-project-frame mry-project-half">
                      <div className="mry-cover-frame">
                        <img
                          className="mry-project-cover"
                          src={`/assets/img/hero/${product.hero}`}
                          alt="Project"
                          data-swiper-parallax={500}
                          data-swiper-parallax-scale="1.4"
                        />
                        <div className="mry-cover-overlay" />
                      </div>
                      <div className="mry-main-title-frame">
                        <div className="container">
                          <div
                            className="mry-main-title"
                            data-swiper-parallax-x="30%"
                            data-swiper-parallax-scale=".7"
                            data-swiper-parallax-opacity={0}
                            data-swiper-parallax-duration={1000}
                          >
                            <div className="mry-subtitle mry-mb-20">
                              {product.category}
                            </div>
                            <h1 className="mry-mb-30">
                              {product.title}
                              <br />
                              <span className="mry-border-text">{product.span}</span>
                              <span className="mry-animation-el" />
                            </h1>
                            <div className="mry-text mry-mb-30" dangerouslySetInnerHTML={{ __html: product.heroText }}>

                            </div>
                            <a
                              className="mry-btn mry-default-link mry-anima-link"
                              href={`/products/${product.id}`}
                            >
                              View Product
                            </a>
                            <a
                              className="mry-btn-text mry-default-link mry-anima-link"
                              href="products"
                            >
                              All Products
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="mry-slider-pagination-frame">
          <div className="mry-slider-pagination" />
        </div>
        <div className="mry-slider-nav-panel">
          <div className="container">
            <div className="mry-slider-progress-bar-frame">
              <div className="mry-slider-progress-bar">
                <div className="mry-progress" />
              </div>
            </div>
          </div>
          <div className="mry-slider-arrows">
            <div className="mry-label">Slider Navigation</div>
            <div className="mry-button-prev mry-magnetic-link">
              <span className="mry-magnetic-object">
                <i className="fas fa-arrow-left" />
              </span>
            </div>
            <div className="mry-button-next mry-magnetic-link">
              <span className="mry-magnetic-object">
                <i className="fas fa-arrow-right" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

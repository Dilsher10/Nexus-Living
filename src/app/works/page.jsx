"use client";
import Footer from "../../components/Footer";
import LogoSliderSection from "../../components/LogoSliderSection";
import SolutionsSection from "../../components/SolutionsSection";
import PathToExcellence from "../../components/PathToExcellence";
import HowItWorksSection from "../../components/HowItWorksSection";
import TestimonialSection from "../../components/TestimonialSection";

const Products = () => {
    return (
        <div className="transition-fade">
            <div className="mry-content-frame" id="scroll">
                <canvas className="mry-dots" />
                <div className="mry-head-bg">
                    <img src="/assets/img/dark/projects/prjct-6/1.jpg" alt="background" />
                    <div className="mry-bg-overlay" />
                </div>
                <div className="mry-banner mry-p-140-0">
                    <div className="container">
                        <div className="mry-main-title mry-title-center">
                            <div className="mry-subtitle mry-mb-20 mry-fo">Works</div>
                            <h1 className="mry-mb-20 mry-fo">
                                Transforming Spaces Into
                                <br />
                                <span className="mry-border-text">Intelligent Environments</span>
                                <span className="mry-animation-el" />
                            </h1>
                            <div className="mry-text mry-fo">
                                Explore smart automation projects designed for luxury living.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mry-portfolio mry-p-100-100">
                    <div className="container">
                        <LogoSliderSection />
                        <SolutionsSection />
                        <PathToExcellence />
                        <HowItWorksSection />
                        <TestimonialSection />
                    </div>
                </div>

                <Footer />
                <div className="mry-head-bg mry-head-bottom">
                    <img src="/assets/img/dark/projects/prjct-2/1.jpg" alt="background" />
                    <div className="mry-bg-overlay" />
                </div>
            </div>
        </div>
    )
}

export default Products;
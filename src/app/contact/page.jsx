"use client";
import Footer from "../../components/Footer";

const Contact = () => {
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
                            <div className="mry-subtitle mry-mb-20 mry-fo">Contact</div>
                            <h1 className="mry-mb-20 mry-fo">
                                Do you have any questions?
                                <br />
                                <span className="mry-border-text">Write us a message.</span>
                                <span className="mry-animation-el" />
                            </h1>
                            <div className="mry-text mry-fo">
                                Lorem ipsum dolor sit amet, consectetur.
                                <br />
                                Adipisicing elit suscipit, at.
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact */}
                <div className="mry-about mry-p-100-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mry-mb-100 mry-text-center">
                                            <div className="mry-numbering mry-fo">
                                                <div className="mry-border-text">01</div>
                                                <div className="mry-subtitle">Location</div>
                                            </div>
                                            <div className="mry-fade-object mry-mb-100">
                                                <h4 className="mry-mb-20 mry-fo">Welcome to visit</h4>
                                                <p className="mry-text mry-mb-20 mry-fo">
                                                    Islamabad, Pakistan
                                                    <br />
                                                    Ground Floor, Plaza 18, Wisteria Road, Sector A DHA Phase 2, Islamabad.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mry-mb-100 mry-text-center">
                                            <div className="mry-numbering mry-fo">
                                                <div className="mry-border-text">02</div>
                                                <div className="mry-subtitle">Contact</div>
                                            </div>
                                            <div className="mry-fade-object mry-mb-100">
                                                <h4 className="mry-mb-20 mry-fo">Shall we talk?</h4>
                                                <p className="mry-text mry-fo">
                                                    Email: info@nexusliving.pk <br />
                                                    Phone: +92 309 7863987
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mry-main-title mry-title-center mry-p-0-40">
                                    <div className="mry-numbering mry-fo">
                                        <div className="mry-border-text">03</div>
                                        <div className="mry-subtitle">Contact form</div>
                                    </div>
                                    <h2 className="mry-fo">Write us a message</h2>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <form
                                    method="POST"
                                    id="form"
                                    className="mry-form mry-mb-100"
                                    action=""
                                >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="mry-label mry-fo" htmlFor="firstName">
                                                First Name
                                            </label>
                                            <div className="mry-fo">
                                                <input
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="John"
                                                    className="mry-default-link"
                                                    type="text"
                                                    data-parsley-pattern="^[a-zA-Z\s.]+$"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <label className="mry-label mry-fo" htmlFor="lastName">
                                                Last Name
                                            </label>
                                            <div className="mry-fo">
                                                <input
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder="Johnsone"
                                                    className="mry-default-link"
                                                    type="text"
                                                    data-parsley-pattern="^[a-zA-Z\s.]+$"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="mry-label mry-fo" htmlFor="email">
                                                Email
                                            </label>
                                            <div className="mry-fo">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    placeholder="type.your.mail@here"
                                                    className="mry-default-link"
                                                    type="email"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <label className="mry-label mry-fo" htmlFor="phone">
                                                Phone
                                            </label>
                                            <div className="mry-fo">
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="+0 (000) 000 00 00"
                                                    className="mry-default-link"
                                                    type="text"
                                                    data-parsley-pattern="^\+{1}[0-9]+$"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mry-fade-object">
                                        <label className="mry-label mry-fo" htmlFor="message">
                                            Message
                                        </label>
                                        <div className="mry-fo">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={8}
                                                cols={80}
                                                placeholder="Type your message here"
                                                className="mry-default-link"
                                                type="text"
                                                data-parsley-pattern="^[a-zA-Z0-9\s.:,!?']+$"
                                                required=""
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-lg-4">
                                            <div className="mry-fo">
                                                <button
                                                    type="submit"
                                                    className="mry-btn mry-default-link"
                                                >
                                                    Send message
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <p className="mry-text mry-simple-text mry-contact-hint mry-fo">
                                                <span className="mry-color-text">*</span> We promise not
                                                to share your personal information with third parties.
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-12">
                                <div className="mry-main-title mry-title-center mry-p-0-40">
                                    <div className="mry-numbering mry-fo">
                                        <div className="mry-border-text">04</div>
                                        <div className="mry-subtitle">Map</div>
                                    </div>
                                    <h2 className="mry-fo">Welcome to visit</h2>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="mry-map-frame mry-mb-100 mry-fo">
                                    <div id="map-light" className="mry-map mry-map-light" />
                                    <div className="mry-lock mry-magnetic-link">
                                        <i className="fas fa-lock mry-magnetic-object" />
                                    </div>
                                    <div className="mry-curtain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact end */}
                <Footer />
                <div className="mry-head-bg mry-head-bottom">
                    <img src="/assets/img/dark/projects/prjct-2/1.jpg" alt="background" />
                    <div className="mry-bg-overlay" />
                </div>
            </div>
        </div>
    )
}

export default Contact;
import React, { Component } from "react";
// import '../App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'animate.css/animate.min.css';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'magnific-popup/dist/magnific-popup.css';
// import 'normalize.css';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'slicknav/dist/slicknav.min.css';

class Feature extends Component {
    render() {
        return (
            <section className="Feautes section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>We Are Always Ready to Help You & Your Family</h2>
                                <img src="img/section-img.png" alt="#" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12">

                            <div className="single-features">
                                <div className="signle-icon">
                                    <i className="icofont icofont-ambulance-cross"></i>
                                </div>
                                <h3>Emergency Help</h3>
                                <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-12">

                            <div className="single-features">
                                <div className="signle-icon">
                                    <i className="icofont icofont-medical-sign-alt"></i>
                                </div>
                                <h3>Enriched Pharmecy</h3>
                                <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-12">

                            <div className="single-features last">
                                <div className="signle-icon">
                                    <i className="icofont icofont-stethoscope"></i>
                                </div>
                                <h3>Medical Treatment</h3>
                                <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Feature;
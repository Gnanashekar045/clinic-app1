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

class FunFact extends Component {
    render() {
        return (
            <div id="fun-facts" className="fun-facts section overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="single-fun">
                                <i className="icofont icofont-home"></i>
                                <div className="content">
                                    <span className="counter">3468</span>
                                    <p>Hospital Rooms</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="single-fun">
                                <i className="icofont icofont-user-alt-3"></i>
                                <div className="content">
                                    <span className="counter">557</span>
                                    <p>Specialist Doctors</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="single-fun">
                                <i className="icofont-simple-smile"></i>
                                <div className="content">
                                    <span className="counter">4379</span>
                                    <p>Happy Patients</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="single-fun">
                                <i className="icofont icofont-table"></i>
                                <div className="content">
                                    <span className="counter">32</span>
                                    <p>Years of Experience</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FunFact;
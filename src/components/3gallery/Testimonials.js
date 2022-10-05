import React from 'react'

import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className="homePageTestimonials">

            <h1 className="homeHeader">Metro Manila Aerial Ropeway Transport (MMART)</h1>

            <hr />

            <div className="testimonialContainer">
                <div className="row homeRow">
                    <div className="col-lg-4 col-md-6 col-sm-12 rowItems">
                        <div className="single-box">
                            <img src="/home1.jpeg" alt="ART" />
                            <h4>ART</h4>
                            <span className="text-muted">Aerial Ropeway Transport (also referred to as Cable Car) may not be the most viable solution for urban transport problems, but it is increasingly becoming clear that it is the leading option for sustainable alternative urban transport. It is an effective solution for transport within peripheral urban areas with challenging topographical and urban planning conditions.</span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 rowItems">
                        <div className="single-box">
                            <img src="/home2.jpeg" alt="Small Footprints" />
                            <h4>Small Footprints</h4>
                            <span className="text-muted">Cable cars can provide a direct connection between two points in spite of physical barriers and obstacles. It only requires small spaces for towers and stations. System implementation also only entails a small footprint during construction which translates to minimum interference to vehicle traffic. </span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 rowItems">
                        <div className="single-box">
                            <img src="/home3.jpeg" alt="Bartholet" />
                            <h4>Bartholet</h4>
                            <span className="text-muted">Planning for the MMART project started in 2018. iSkyBus organized a team of experts including technical representatives of Bartholet Maschinenbau AG (BMF) to develop a comprehensive approach to analyzing the viability of using Aerial Ropeway Transport as a supplemental solution to the traffic congestion in Metro Manila. </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials

import React from 'react'

import './VisionMission.css'

const Testimonials = () => {
    return (
        <div className="visionMission">

            <div className="visionMissionContainer">
                <div className="row aboutRow">
                    <div className="col-lg-4 col-md-6 col-sm-12 visionRowItems">
                        <div className="single-box">
                            <img src="/aboutus1.jpeg" alt="ART" />
                            <h4>About Us</h4>
                            <span className="text-muted">iSkyBus Transport, Inc. (iSkyBus) is a public infrastructure and transportation company engaged in consultancy, development, implementation, and management of alternative modes of conveyance for people and goods. Although a relatively young corporation organized under Philippine laws, the group is composed of highly skilled professionals with proven financial, legal, and technical expertise. </span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 visionRowItems">
                        <div className="single-box">
                            <img src="/aboutus2.jpeg" alt="Small Footprints" />
                            <h4>Vision</h4>
                            <span className="text-muted">iSkyBus will establish the Philippines to become the first Asian country to use the Aerial Ropeway Transit as a form of public transport and urban mobility to address traffic problems in key cities around the country. We also aim to become the first-ever, in the world, to use this system with Zero Carbon Footprint using 100% off-grid renewable power supply.</span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 visionRowItems">
                        <div className="single-box">
                            <img src="/aboutus3.jpeg" alt="Bartholet" />
                            <h4>Mission</h4>
                            <p className="text-muted">To bring concept into reality in the field of mass transport innovations allowing us to address the pressing needs of major cities around the Philippines. </p>

                            <br></br>

                            <p className="text-muted">To take an active role in nation building by becoming the leading provider for alternative and sustainable mode of transportation suitable for highly urbanized areas in the Philippines.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials

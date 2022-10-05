import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './AboutUsCarousel.css'

const AboutUsCarousel = () => {
    return (
        <div className="aboutContainer">
            <h1 className="aboutHeader">Let's make Metro Manila a better place...</h1>

             <hr /> 

             {/* Slideshow */}
             <Carousel fade className="aboutCarousel">
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src="/about_carousel1.jpeg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src="/about_carousel2.jpeg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src="/about_carousel3.jpeg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src="/about_carousel4.jpeg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src="/about_carousel5.jpeg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src="/about_carousel6.jpeg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src="/about_carousel7.jpeg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src="/about_carousel8.jpeg"
                    alt="First slide"
                    />
                </Carousel.Item>


            </Carousel>

             <h1 className="subHeader">
                 and the rest of the Philippines... then the rest of Asia.
                 <hr/>
             </h1>
        </div>
    )
}

export default AboutUsCarousel

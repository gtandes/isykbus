import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './HomepageCarousel.css'

const HomepageCarousel = () => {
    return (
        <div className="homeCarouselContainer">
            <Carousel fade className="homeCarousel">
                <Carousel.Item interval={8000} className="homeCarouselItem">
                    
                    <img
                    className="d-block w-100"
                    src="/homecarou1.bmp"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="carouselHeader">Launching Soon</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* <Carousel.Item interval={8000}>
                    <img
                    className="d-block w-100"
                    src="/homecarou2.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className="carouselHeader">Launching Soon</h3>
                    </Carousel.Caption>
                </Carousel.Item> */}

                <Carousel.Item interval={8000} className="homeCarouselItem"> 
                    <img
                    className="d-block w-100"
                    src="/homecarou2.bmp"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className="carouselHeader">Launching Soon</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={8000} className="homeCarouselItem"> 
                    <img
                    className="d-block w-100"
                    src="/homecarou3.bmp"
                    alt="Fourth slide"
                    />
                    <Carousel.Caption>
                    <h3 className="carouselHeader">Launching Soon</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000} className="homeCarouselItem"> 
                    <img
                    className="d-block w-100"
                    src="/homecarou4.jpg"
                    alt="Fifth slide"
                    />
                    <Carousel.Caption>
                    <h3 className="carouselHeader">Launching Soon</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={8000} className="homeCarouselItem"> 
                    <img
                    className="d-block w-100"
                    src="/homecarou5.bmp"
                    alt="Sixth slide"
                    />
                    <Carousel.Caption>
                    <h3 className="carouselHeader">Launching Soon</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={8000} className="homeCarouselItem"> 
                    <img
                    className="d-block w-100"
                    src="/homecarou6.jpg"
                    alt="Sixth slide"
                    />
                    <Carousel.Caption>
                    <h3 className="carouselHeader">Launching Soon</h3>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
        </div>
    )
}

export default HomepageCarousel

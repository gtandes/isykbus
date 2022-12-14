import React from 'react'
import './AboutCarousel2.css'

const AboutCarousel2 = () => {
    return (
        <div>
            <div id='carousel-custom' class='carousel slide' data-ride='carousel'>
                <div class='carousel-outer'>
                    <div class='carousel-inner'>
                        <div class='item active'>
                            <img src='http://placehold.it/400x200&text=slide1' alt='' />
                        </div>
                        <div class='item'>
                            <img src='http://placehold.it/400x200&text=slide2' alt='' />
                        </div>
                        <div class='item'>
                            <img src='http://placehold.it/400x200&text=slide3' alt='' />
                        </div>
                            
                        <div class='item'>
                            <img src='http://placehold.it/400x200&text=slide4' alt='' />
                        </div>
                        <div class='item'>
                            <img src='http://placehold.it/400x200&text=slide5' alt='' />
                        </div>
                        <div class='item'>
                            <img src='http://placehold.it/400x200&text=slide6' alt='' />
                        </div>
                        
                        <div class='item'>
                            <img src='http://placehold.it/400x200&text=slide7' alt='' />
                        </div>
                        <div class='item'>
                            <img src='http://placehold.it/400x200&text=slide8' alt='' />
                        </div>
                        <div class='item'>
                            <img src='http://placehold.it/400x200&text=slide9' alt='' />
                        </div>
                    </div>
                                            
                    <a class='left carousel-control' href='#carousel-custom' data-slide='prev'>
                        <span class='glyphicon glyphicon-chevron-left'></span>
                    </a>

                    <a class='right carousel-control' href='#carousel-custom' data-slide='next'>
                        <span class='glyphicon glyphicon-chevron-right'></span>
                    </a>
                </div>
                
                <ol class='carousel-indicators'>
                    <li data-target='#carousel-custom' data-slide-to='0' class='active'><img src='http://placehold.it/100x50&text=slide1' alt='' /></li>
                    <li data-target='#carousel-custom' data-slide-to='1'><img src='http://placehold.it/100x50&text=slide2' alt='' /></li>
                    <li data-target='#carousel-custom' data-slide-to='2'><img src='http://placehold.it/100x50&text=slide3' alt='' /></li>
                    <li data-target='#carousel-custom' data-slide-to='3'><img src='http://placehold.it/100x50&text=slide4' alt='' /></li>
                    <li data-target='#carousel-custom' data-slide-to='4'><img src='http://placehold.it/100x50&text=slide5' alt='' /></li>
                    <li data-target='#carousel-custom' data-slide-to='5'><img src='http://placehold.it/100x50&text=slide6' alt='' /></li>
                    <li data-target='#carousel-custom' data-slide-to='6'><img src='http://placehold.it/100x50&text=slide7' alt='' /></li>
                    <li data-target='#carousel-custom' data-slide-to='7'><img src='http://placehold.it/100x50&text=slide8' alt='' /></li>
                    <li data-target='#carousel-custom' data-slide-to='8'><img src='http://placehold.it/100x50&text=slide9' alt='' /></li>
                </ol>
            </div>
        </div>
    )
}

export default AboutCarousel2

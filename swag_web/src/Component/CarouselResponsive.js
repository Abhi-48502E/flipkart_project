import React from 'react'
import './carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import bann from '../Assets/banner1.png'
import bann2 from '../Assets/banner3.png'
import bann3 from '../Assets/banner4.png'



function CarouselResponsive() {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block"
                        id='banner-img'
                        src={bann}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block"
                        src={bann2}
                        id="banner-img2"
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src={bann3}
                        id="banner-img3"
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default CarouselResponsive
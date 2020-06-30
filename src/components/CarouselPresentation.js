import React from 'react';
import '../css/CarouselPresentation.css';
import { Carousel } from 'react-bootstrap';
import Img1 from '../image/party1.jpg';
import Img2 from '../image/party2.jpg';
//import Img3 from '../image/party2.jpg';

export default function CarouselPresentation() {
    
    return(
        <div id="container-carousel-presentation">
            <Carousel id="carouselPresentation">
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Img2}
                    alt="Third slide"
                />            
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>            
                
            </Carousel> 
        </div>
    );    
}
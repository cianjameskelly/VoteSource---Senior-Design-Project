import React, { Component } from 'react'
import { Carousel, Image } from 'react-bootstrap';
import countys from './images/countys.jpg'
import speaker from './images/speaker.webp'
//import voters from './images/voters.jpg'

export default class Home extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item interval={5000}>
                <Image src={countys} height = {200}/>
                    <Carousel.Caption 
                        className="d-none d-md-block bg-dark mb-4"
                        position="bottom"
                    >
                    <h3>First slide label</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                <Image src={speaker} height = {200}/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Image src={speaker} height = {200}/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        )
    }
}
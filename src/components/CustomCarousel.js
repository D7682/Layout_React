import React from "react";
import { Carousel } from "react-bootstrap";
import CyberPunk2077 from "./../img/CyberPunk2077.jpg";
import CaroImage from "./../img/carousel.jpg";
import Waves from "./../img/waves.jpg";

export default function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={CyberPunk2077} alt="first slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla bitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CaroImage} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Waves} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

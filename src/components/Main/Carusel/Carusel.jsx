import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Carusel1 from "../../../assets/img/Carusel1.png";
import Carusel2 from "../../../assets/img/Carusel2.png";
import "../Carusel/Carusel.scss";

const CarouselComponent = () => {
  return (
    <div className="container ">
      <div className="CaruselSection">
        <div className="CaruselInfo">
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="btn">Explore More</button>
        </div>
        <div>
          <Carousel className="carusel">
            <Carousel.Item>
              <img src={Carusel1} alt="" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Carusel1} alt="" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Carusel2} alt="" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;

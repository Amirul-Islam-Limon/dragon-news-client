import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brandImage1 from "../../../assets/brandImage/brand-photo1.png";
import brandImage2 from "../../../assets/brandImage/brand-photo2.jpg";

const BrandCarousel = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brandImage1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brandImage2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    );
};

export default BrandCarousel;
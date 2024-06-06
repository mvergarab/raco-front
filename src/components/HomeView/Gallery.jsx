import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import firstFoto from '../../images/gallery/gal_first.jpg';
import secondFoto from '../../images/gallery/gal_second.jpg';
import thirdFoto from '../../images/gallery/gal_third.jpg';
import fourthFoto from '../../images/gallery/gal_fourth.jpg';
import fifthFoto from '../../images/gallery/gal_fifth.jpg';
import sixthFoto from '../../images/gallery/gal_sixth.jpg';


const Gallery = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div className="gallery-container">
      <div className="carousel-wrapper"> {/* Adjust padding as needed */}
        <Carousel indicators={false} prevLabel="" nextLabel="">
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <img
                className="d-block w-30 diagonal-clip"
                src={firstFoto}
                alt="First slide"
                style={{ height: '650px' }}
              />
              <img
                className="d-block w-30 diagonal-clip"
                src={secondFoto}
                alt="Second slide"
                style={{ height: '650px' }}
              />
              <img
                className="d-block w-30 diagonal-clip"
                src={thirdFoto}
                alt="Third slide"
                style={{ height: '650px' }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <img
                className="d-block w-30 diagonal-clip"
                src={fourthFoto}
                alt="Fourth slide"
                style={{ height: '650px' }}
              />
              <img
                className="d-block w-30 diagonal-clip"
                src={fifthFoto}
                alt="Fifth slide"
                style={{ height: '650px' }}
              />
              <img
                className="d-block w-30 diagonal-clip"
                src={sixthFoto}
                alt="Sixth slide"
                style={{ height: '650px' }}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div
        className={`gallery-title ${isVisible ? 'visible' : 'hidden'}`}
        onClick={handleClick}
      >
        <h1>Galería</h1>
      </div>
    </div>
  );
};

export default Gallery;


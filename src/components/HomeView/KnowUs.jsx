import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstFoto from '../../images/carousel/car_first.jpg';
import secondFoto from '../../images/carousel/car_second.jpg';
import thirdFoto from '../../images/carousel/car_third.jpg';
import fourthFoto from '../../images/carousel/car_fourth.jpg';
import fifthFoto from '../../images/carousel/car_fifth.jpg';
import sixthFoto from '../../images/carousel/car_sixth.jpg';

const KnowUs = () => {
  return (
    <div className="slider-container">
      <h2>Conócenos</h2>
      <div className="carousel-wrapper" style={{ padding: '0 20px 0 20px' }}> {/* Adjust padding as needed */}
        <Carousel indicators={false} prevLabel="" nextLabel="">
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <img
                className="d-block w-30"
                src={firstFoto}
                alt="First slide"
                style={{ height: '450px', marginRight: '30px' }} // Add margin-right for spacing
              />
              <img
                className="d-block w-30"
                src={secondFoto}
                alt="Second slide"
                style={{ height: '450px', marginRight: '30px' }} // Add margin-right for spacing
              />
              <img
                className="d-block w-30"
                src={thirdFoto}
                alt="Third slide"
                style={{ height: '450px', marginRight: '30px' }} // Add margin-right for spacing
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <img
                className="d-block w-30"
                src={fourthFoto}
                alt="Fourth slide"
                style={{ height: '450px', marginRight: '30px' }} // Add margin-right for spacing
              />
              <img
                className="d-block w-30"
                src={fifthFoto}
                alt="Fifth slide"
                style={{ height: '450px', marginRight: '30px' }} // Add margin-right for spacing
              />
              <img
                className="d-block w-30"
                src={sixthFoto}
                alt="Sixth slide"
                style={{ height: '450px', marginRight: '30px' }} // Add margin-right for spacing
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default KnowUs;

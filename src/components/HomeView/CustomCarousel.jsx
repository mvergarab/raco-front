import React, { useState } from "react";

const CustomCarousel = ({ images, slidesToShow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - slidesToShow : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <h2>Conócenos</h2>
      <div className="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index >= currentIndex && index < currentIndex + slidesToShow
                  ? "active"
                  : ""
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>
        <button className="carousel-btn prev" onClick={prevSlide}>
          Prev
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;


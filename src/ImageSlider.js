import React from 'react';
import './ImageSlider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const ReactCardSlider = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={slideLeft}
        />

        <div id="slider">
          {props.slides.map((slide, index) => {
            return (
              <div
                className="slider-card"
                key={index}
                onClick={() => slide.clickEvent()}
              >
                <div
                  className="slider-card-image"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                  }}
                ></div>
                <p className="slider-card-title">{slide.title}</p>
                <p className="slider-card-description">{slide.description}</p>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          size={20}
          className="slider-icon right"
          onClick={slideRight}
        />
      </div>
      <div style={{display:'flex'}}>
        <h1 style={{ margin: '80px' }} onClick={slideRight}>
          raju
        </h1>

        <h1 style={{ margin: '80px' }} onClick={slideLeft}>
          saurav
        </h1>
      </div>
    </div>
  );
};


export default ReactCardSlider;

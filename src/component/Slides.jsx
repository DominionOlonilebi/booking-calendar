import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Slides extends Component {
  render() { 
    const settings = {
      // dots: true,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1400, // Large screens (LG)
          settings: {
            slidesToShow: 4, // 4 slides visible at once on large screens
          },
        },
        {
          breakpoint: 1024, // Medium screens (MD)
          settings: {
            slidesToShow: 2, // 2 slides visible at once on medium screens
          },
        },
        {
          breakpoint: 576, // Small screens (XS)
          settings: {
            slidesToShow: 1, // 1 slides visible at once on extra small screens
          },
        },
      ],
    };

    return (
      <div className="slider-container text-black mt-3 container">
        <div className="row">
          <h3 className="mb-3">Featured</h3>
          <Slider {...settings}>
            <div key="slide1">
              <img src='./src/assets/massage12.jpg' className='img-fluid'/>
            </div>
            <div key="slide2">
              <img src='./src/assets/massage13.jpg' className='img-fluid'/>
            </div>
            <div key="slide3">
              <img src='./src/assets/massage18.jpg' className='img-fluid'/>
            </div>
            <div key="slide4">
              <img src='./src/assets/massage2.jpg' className='img-fluid'/>
            </div>
            <div key="slide5">
              <img src='./src/assets/massage14.jpg' className='img-fluid'/>
            </div>
            <div key="slide6">
              <img src='./src/assets/massage15.jpg' className='img-fluid'/>
            </div>
            <div key="slide7">
              <img src='./src/assets/massage16.jpg' className='img-fluid'/>
            </div>
            <div key="slide8">
              <img src='./src/assets/massage17.jpg' className='img-fluid'/>
            </div>
            <div key="slide9">
              <img src='./src/assets/massage18.jpg' className='img-fluid'/>
            </div>
            <div key="slide10">
              <img src='./src/assets/massage9.jpg' className='img-fluid'/>
            </div>
            <div key="slide11">
              <img src='./src/assets/massage10.jpg' className='img-fluid'/>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Slides;

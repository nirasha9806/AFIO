import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

export default class CustomSlider extends Component {
  render() {
    const settings =  {
      arrows: false,
      dots: true,
      duration: 100,
      slidesToShow: 2,
      autoplay: true,
      
    };
    return (
      <div> 
        <Slider { ...settings }>
          <div className="slider-item">
            <img src = "../../../img/fas1.jpg"></img>
          </div>
          <div>
          <img src = "../../../img/p2.jpg"></img>
          </div>
          <div>
          <img src = "../../../img/p3.jpg"></img>
          </div>
          <div>
          <img src = "../../../img/p5.jpg"></img>
          </div>
          <div>
          <img src = "../../../img/p4.jpg"></img>
          </div>
          <div>
           <img src = "../../../img/p6.jpg"></img>
          </div>
          <div>
          <img src = "../../../img/p2.jpg"></img>
          </div>
        </Slider>
        
      </div>
    );
  }
}
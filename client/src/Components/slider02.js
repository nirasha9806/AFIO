import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

export default class CustomSliders extends Component {
  render() {
    const settings =  {
      arrows: false,
      dots: true,
      slidesToShow: 2
    };
    return (
      <div>
        <Slider { ...settings }>
          <div>
            <img src = "../../../img/girl.jpg"></img>
            
          </div>
          <div>
          <img src = "../../../img/girl2.jpg"></img>
          </div>
          <div>
          <img src = "../../../img/boy.jpg"></img>
          </div>
          <div>
          <img src = "../../../img/shoes.jpg"></img>
          </div>
          <div>
          <img src = "../../../img/baby.jpg"></img>
          </div>
          <div>
          <img src = "../../../img/girl3.jpg"></img>
          </div>
          <div>
            <h3>7</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
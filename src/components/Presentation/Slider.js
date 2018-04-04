import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Img1 from './../../images/img1.jpg';

let counter = 0;

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 0
    }
  }
  render() {
    return (
      <Carousel 
        slideIndex={this.state.slideIndex} 
        afterSlide={slideIndex => {
          this.setState({ slideIndex: 0 });
          counter++;
          if (counter > 2) {
            window.location = '/login';
          };
        } } >
        <div className="inner-slider"><img src={Img1} alt="" /></div>
        <div className="inner-slider"><img src="http://www.junkinside.com/wp-content/uploads/2011/09/fantasy-night-wallpaper-for-android-mobile-phone.jpg" alt="" /></div>
      </Carousel>
    );
  }
}

export default Slider;
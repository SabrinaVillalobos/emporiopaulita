import React, { Component } from 'react';
import Slider from './Slider';
import './index.css';

class Presentation extends Component {
  constructor() {
    super();
    this.state = {
      showing: true
    }
  }
  render() {
    return (
      <div id="Presentation">
        <Slider />
      </div>
    );
  }
}

export default Presentation;
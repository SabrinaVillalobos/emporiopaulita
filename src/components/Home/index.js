import React, { Component } from 'react';
import Navbar from './../Navbar';
import Products from './../Products';
import Sales from './Sales';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      userId: null
    }
  }
  componentWillMount() {
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Sales/>
      </div>
    );
  }
}

export default Home;
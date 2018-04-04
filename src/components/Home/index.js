import React, { Component } from 'react';
import Navbar from './../Navbar';
import Products from './../Products';

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
        <Products/>
      </div>
    );
  }
}

export default Home;
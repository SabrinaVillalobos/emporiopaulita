import React, { Component } from 'react';
import SelectedProds from './SelectedProds';
import Navbar from './../Navbar';
import './index.css';

class Products extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SelectedProds/>
      </div>
    );
  }
}

export default Products;
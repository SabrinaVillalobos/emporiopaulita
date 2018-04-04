import React, { Component } from 'react';
import data from './../../data/data';

class Sales extends Component {
  constructor() {
    super();
    this.state = {
      products: null
    }
  }
  componentWillMount() {
    let prices = [];
    let productsOnSale = [];
    data.map(product => {
      prices.push(product.price);
    });
    prices.sort((a, b) => {
      return a - b;
    })
    data.map(product => {
      if (product.price === prices[0] || product.price === prices[1]) {
        productsOnSale.push(product);
      }
      return productsOnSale;
    });
    this.setState({
      products: productsOnSale
    });
  }
  render() {
    return (
      <div id="Sales" className="card-group">
        {
          this.state.products !== null ?
            this.state.products.map(product => {
              return (
                <div className="card" key={product.title}>
                  <img src={product.img} alt={product.title} className="card-img-top"/>
                </div>
              );
            })
          : <p>null</p>
        }
      </div>
    );
  }
}

export default Sales;
import React, { Component } from 'react';
import data from './../../data/data';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
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
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title}
                    </h5>
                    <p className="card-text">
                      <span>Precio: </span> ${numberWithCommas(product.price)} <span> (Oferta)</span>
                    </p>
                  </div>
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
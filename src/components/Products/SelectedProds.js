import React, { Component } from 'react';
import data from './../../data/data';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

class SelectedProds extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }
  componentWillMount() {
    let path = window.location.pathname;
    if (path !== '/products') {
      let toSearch = path.split('/').pop().trim();
      let selection = [];
      data.map(product => {
        if (product.category.toLowerCase().replace(/ /g, '-') === toSearch) {
          selection.push(product);
        }
        return selection;
      });
      this.setState({
        data: selection
      });
    } else {
      this.setState({
        data: data
      });
    }
  }
  componentWillReceiveProps() {
    let path = window.location.pathname;
    if (path !== '/products') {
      let toSearch = path.split('/').pop().trim();
      let selection = [];
      data.map(product => {
        if (product.category.toLowerCase().replace(/ /g, '-') === toSearch) {
          selection.push(product);
        }
        return selection;
      });
      this.setState({
        data: selection
      });
    } else {
      this.setState({
        data: data
      });
    }
  }
  render() {
    return (
      <div id="SelectedProds" className="card-group">
        {
          this.state.data !== null ? 
            this.state.data.map((product, i) => {
              return (
              <div key={product.title + i} className="card">
                <img className="card-img-top" src={product.img} alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title}
                  </h5>
                  <p className="card-text">
                    <span>Precio: </span> ${numberWithCommas(product.price)}
                  </p>
                </div>
                <div className="card-footer">
                  <a href="/" className="btn btn-primary">Ver Más</a>
                </div>
              </div>);
            }) 
          : <p>null</p>
        }
      </div>
    );
  }
}

export default SelectedProds;
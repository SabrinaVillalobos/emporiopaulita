import React, { Component } from 'react';
import data from './../../data/data';
import { Link } from 'react-router-dom';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }
  componentWillMount() {
    let categories = [];
    data.map(product => {
      if (categories.indexOf(product.category) === -1) {
        categories.push(product.category);
      }
      return categories;
    });
    this.setState({
      data: categories
    });
  }
  componentDidMount() {
    console.log(this.state);
  }
  render() {
    return (
      <div className="dropdown-menu" aria-labelledby="productsDropdown">
        {
          this.state.data !== null ?
            this.state.data.map(category => {
              return (
                <Link to={'/products/' + category.toLowerCase().replace(/ /g, '-')} key={category} className="dropdown-item">{category}</Link>
              );
            })
          : <p>null</p>
        }
      </div>
    );
  }
}

export default Categories;
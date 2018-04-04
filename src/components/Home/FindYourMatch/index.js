import React, { Component } from 'react';
import data from './../../../data/data';

class FindYourMatch extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      categories: null,
      filters: []
    }
  }
  componentWillMount() {
    let categories = [];
    data.map(product => {
      if (categories.indexOf(product.category) === -1) {
        categories.push(product.category);
      }
    })
    this.setState({
      data: data,
      categories: categories
    })
  }
  render() {
    if (this.state.data !== null){
      return this.state.categories.map(category => {
        return (
          <button key={category} onClick={e => {
            let filters = [e.target.innerText];
            this.setState({
              filters: filters
            });
            return (<p>asdasd</p>);
          }}>{category}</button>
        );
      })
    }
    // return (
    //   <div id="FindYourMatch">
    //     {
    //       // this.state.data !== null ? 
    //       //   this.state.categories.map(category => {
    //       //     return <button key={category} onClick={e => {
    //       //       let filters = [e.target.innerText];
    //       //       this.setState({
    //       //         filters: filters
    //       //       });
    //       //     }}>{category}</button>
    //       //   })
    //       // : <p>null</p>
    //     }
    //   </div>
  }
};

export default FindYourMatch;
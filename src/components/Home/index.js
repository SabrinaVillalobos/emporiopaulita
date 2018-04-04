import React, { Component } from 'react';
import Navbar from './../Navbar';
import Sales from './Sales';
import FindYourMatch from './FindYourMatch';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isFiltering: false
    }
  }
  render() {
    return (
      <div>
        <Navbar/>
        {
          this.state.isFiltering ? <FindYourMatch/>
          : 
          <div><Sales/>
          <button onClick={e => {
            e.preventDefault();
            this.setState({
              isFiltering: true
            })
          }}>Encuentra tu match</button></div>
        }
      </div>
    );
  }
}

export default Home;
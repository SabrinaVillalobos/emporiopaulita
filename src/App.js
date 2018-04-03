import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import RegisterWithEmail from './components/RegisterWithEmail';
import Products from './components/Products';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register-email" component={RegisterWithEmail} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:category" component={Products} />
        </Switch>
      </div>
    );
  }
}

export default App;

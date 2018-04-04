import React, { Component } from 'react';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import RegisterNext from './components/RegisterNext';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import firebase from 'firebase';
import Products from './components/Products';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        })
      }
   });
  }
  componentWillReceiveProps() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        })
      }
   });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={this.state.user === null ? Login : Home } />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/register/:user" component={RegisterNext}/>
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:category" component={Products} />
        </Switch>
      </div>
    );
  }
}

export default App;

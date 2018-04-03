import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RegisterWithEmail from './components/RegisterWithEmail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/register-email" component={RegisterWithEmail} />
        </Switch>
      </div>
    );
  }
}

export default App;

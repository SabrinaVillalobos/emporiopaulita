import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import firebase from 'firebase';
import { auth } from './../../firebase';
// import './index.css';

class Navbar extends Component {
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
  render() {
    return (
      <div id="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Emporio Paulita</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="productsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Productos</a>
                <Categories/>
              </li>
              {
                this.state.user !== null ? <li className="nav-item"><a className="nav-link" onClick={() => auth.doSignOut()}>Desconectarme</a></li>
                : <li className="nav-item"><a className="nav-link">Conectarme</a></li>
              }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
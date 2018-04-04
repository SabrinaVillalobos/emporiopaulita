import React, { Component } from 'react';
import Logo from './../../images/logo.png';
import firebase from 'firebase';
import { db } from './../../firebase';

class RegisterNext extends Component {
  constructor() {
    super();
    this.state = {
      age: 1,
      gender: '',
      userID: null
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          userID: user.uid
        });
      }
   });
  }
  render() {
    return (
      <div className="row form-user" id="RegisterNext">
        <div className="col-sm">
          <div className="logo-container">
            <img src={Logo} alt="Logo del Emporio" className="logo"/>
          </div>
          <form>
            <label htmlFor="RegAge">Edad</label>
            <input type="number" value={this.state.age} className="form-control" placeholder="Ingresa tu edad" onChange={e => {
              this.setState({
                age: e.target.value
              });
            }}/>
            <button onClick={e => {
              e.preventDefault();
              this.setState({
                gender: 'female'
              });
            }}>
              <i className="fas fa-venus"></i>
              <span>Femenino</span>
            </button>
            <button onClick={e => {
              e.preventDefault();
              this.setState({
                gender: 'male'
              });
            }}>
              <i className="fas fa-mars"></i>
              <span>Masculino</span>
            </button>
          </form>
          <button className="btn btn-primary" onClick={e => {
            e.preventDefault();
            let id = this.state.userID;
            let gender = this.state.gender;
            let age = this.state.age;
            db.storageDetails(id, gender, age);
            this.setState({
              age: '',
              gender: ''
            });
            window.location = '/';
          }}>Continuar</button>
        </div>
      </div>
    );
  }
}

export default RegisterNext;
import React, { Component } from 'react';
import Logo from './../../images/logo.png';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase';
import './index.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pass: ''
    }
  }
  render() {
    return (
      <div className="row form-user" id="Login">
        <div className="col-sm">
          <div className="logo-container"><img src={Logo} alt="Logo del Emporio" id="LoginLogo" className="logo"/></div>
          <p>Sabemos lo que quieres
            y cómo lo quieres
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="LoginMail">Inicia Sesión</label>
              <input type="email" value={this.state.email} className="form-control" id="LoginMail" placeholder="Correo Electrónico" onChange={e => {
                this.setState({
                  email: e.target.value
                })}}/>
              <input type="password" value={this.state.pass} className="form-control" id="LoginPass" placeholder="Contraseña" onChange={e => {
                this.setState({
                  pass: e.target.value
                })
              }}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={e => {
              e.preventDefault();
              let email = this.state.email;
              let pass = this.state.pass;
              auth.doSignInWithEmailAndPassword(email, pass)
                .then(() => {
                  this.setState({
                    email: '',
                    pass: ''
                  });
                });
            }}>Continuar</button>
            <Link className="missing-pass" to="/contra">¿Olvidaste tu contraseña?</Link>
            <Link className="missing-pass" to="/register">Registrate</Link>
          </form>
          <p>----o-----</p>
          <button>Continuar con Google</button>
          <button>Continuar con Facebook</button>
          <button onClick={() => auth.doSignOut()}>Salir</button>
        </div>
      </div>
    );
  }
}

export default Login;
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
      <div className="row" id="Login">
        <div className="col-sm">
          <div id="LogoContainer"><img src={Logo} alt="Logo del Emporio" id="LoginLogo"/></div>
          <p className="weknow">Sabemos lo que quieres</p>
            <p className="andhow">y cómo lo quieres
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="LoginMail" className="login">Inicia Sesión</label><hr className="line" />
              <input className="mail" type="email" value={this.state.email} className="form-control" id="LoginMail" placeholder="Correo Electrónico" onChange={e => {
                this.setState({
                  email: e.target.value
                })}}/>
              <input type="password" value={this.state.pass} className="form-control" id="PassMail" placeholder="Contraseña" onChange={e => {
                this.setState({
                  pass: e.target.value
                })
              }}/>
            </div>
            <div className="text-center"><button type="submit" className="btn continuebtn btn-primary" onClick={e => {
              e.preventDefault();
              let email = this.state.email;
              let pass = this.state.pass;
              auth.doSignInWithEmailAndPassword(email, pass)
                .then(() => {
                  this.setState({
                    email: '',
                    pass: ''
                  })
                });
            }}>Continuar</button></div>
            <Link className="missing-pass" to="/contra">¿Olvidaste tu contraseña?</Link>
          </form>
          <p>----o-----</p>
          <button>Continuar con Google</button>
          <button>Continuar con Facebook</button>
          <p className="noacc">¿No tienes una cuenta?</p>
          <Link className="missing-pass" to="/register">REGISTRATE</Link>
          <button onClick={() => auth.doSignOut()}>Salir</button>
        </div>
      </div>
    );
  }
}

export default Login;
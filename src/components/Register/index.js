import React, { Component } from 'react';
import { auth, db } from './../../firebase';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pass: '',
      name: '',
      lastName: ''
    }
  }
  render() {
    return (
      <div className="row form-user" id="Register">
        <div className="col-sm">
          <form>
            <div className="form-group">
              <label htmlFor="RegMail">Registrate</label>
              <input type="email" value={this.state.email} className="form-control" id="RegMail" placeholder="Correo Electrónico" onChange={e => {
                this.setState({
                  email: e.target.value
                })}}/>
              <input type="password" value={this.state.pass} className="form-control" id="RegPass" placeholder="Contraseña" onChange={e => {
                this.setState({
                  pass: e.target.value
                })
              }}/>
              <input type="text" value={this.state.name} className="form-control" id="RegName" placeholder="Nombre" onChange={e => {
                this.setState({
                  name: e.target.value
                });
              }}/>
              <input type="text" value={this.state.lastName} className="form-control" id="RegLastName" placeholder="Apellido/s" onChange={e => {
                this.setState({
                  lastName: e.target.value
                });
              }}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={e => {
              e.preventDefault();
              let email = this.state.email;
              let pass = this.state.pass;
              auth.doCreateUserWithEmailAndPassword(email, pass)
                .then((authUser) => {
                  let name = this.state.name;
                  let lastName = this.state.lastName;
                  db.doCreateUser(authUser.uid, email, name, lastName)
                    .then(() => {
                      this.setState({
                        email: '',
                        pass: '',
                        name: '',
                        lastName: ''
                      });
                      window.location = `/register/${authUser.uid}`;
                    });
                });
            }}>Confirmar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
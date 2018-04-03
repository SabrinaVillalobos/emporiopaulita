import React, { Component } from 'react';

class RegisterWithEmail extends Component {
  render() {
    return (
      <div id="RegisterWithEmail">
        <form>
          <div className="form-group row">
            <label htmlFor="registerEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="registerEmail" placeholder="Email" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterWithEmail;
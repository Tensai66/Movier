import React, { Component } from 'react';

import '../css/Navbar.css';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : [e.target.value] });
  }

  render() {
    return (
      <div className="signupContainer">
        <form className="signupContent">
          <span className='signupNameFields'>
            <span className='email'>
              <label>Email</label>
              <input
                type='text'
                name='email'
                onChange={this.onChange}
                value={this.state.email}/>
            </span>
          </span>
          <br/><br/>
          <span className='passwordFields'>
            <span>
              <label>Password</label>
              <input
                type='password'
                name='password'
                onChange={this.onChange}
                value={this.state.password}/>
            </span>
            <span>
              <label>Confirm Password</label>
              <input
                type='password'
                name='confirmPassword'
                onChange={this.onChange}
                value={this.state.confirmPassword}/>
            </span>
          </span>
        </form>
      </div>
    );
  }
}

export default Signup;

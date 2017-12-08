import React, { Component } from 'react'
import { login } from '../actions/login'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import mapStateToProps from '../utils/redux'

import Navbar from './Navbar.jsx';

import '../css/Login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state
    let errors = {}, isValid = true

    if(email === '')
      errors['email'] = 'E-Mail required'
    if(password === '')
      errors['password'] = 'Password required'
    
      if(errors.email || errors.password) {
        this.setState({ errors })
        isValid = false
      }

      if(isValid){
        this.props.login({ email, password})
        .then(res => {
          this.context.router.history.push('/')
        })
        .catch( err => {
          errors['login'] = err.response.data.errors
          this.setState({ errors })
        })
      }
  }

  render() {
    return (
      <div className='loginContainer'>
      <Navbar />
        <form onSubmit={this.onSubmit} className='loginContent'>
          <h3>User Login</h3>
          {this.state.errors.login 
            && <h4 className='errorTab'>{this.state.errors.login}</h4>
          }
          <span className='loginField'>
            {this.state.errors.email 
              && <label style={{color: 'red', animation: 'shake 0.5s forwards'}}>{this.state.errors.email}</label>
            }
            <input
              type='email'
              name='email'
              placeholder='E-mail'
              onChange={this.onChange}
              value={this.state.username}/>
          </span>
          <br/><br/>
          <span className='loginField'>
            {this.state.errors.password 
              && <label style={{color: 'red', animation: 'shake 0.5s forwards'}}>{this.state.errors.password}</label>
            }
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={this.onChange}
              value={this.state.username}/>
          </span>
          <button onClick={this.onSubmit}><h3>Login</h3></button>
        </form>
      </div>
    )
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { login })(Login)
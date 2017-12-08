import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/signup'
import mapStateToProps from '../utils/redux'
import PropTypes from 'prop-types'

import Navbar from './Navbar.jsx';

import '../css/Signup.css';
// import '../css/Navbar.css'

class Signup extends Component {

  state = {
    emailVerified: false,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    errors: {}
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  verifyEmail = event => {
    event.preventDefault()
    const { email } = this.state
    if(email.includes('.com')){
      this.setState({ emailVerified: true, errors: {} })
    }
    else {
      const { errors } = this.state
      if(email === '')
        errors['email'] = 'Please enter your e-mail address.'
      else
        errors['email'] = 'You must enter a valid e-mail address.'
      this.setState({ errors })
    }
  }

  verifyForm = () => {
    const { firstName, lastName, password, confirmPassword } = this.state
    let isValid = true, errors = {}

    if(firstName === '')
      errors['firstName'] = 'First name required'
    if(lastName === '')
      errors['lastName'] = 'Last name required'
    if(password === '')
      errors['password'] = 'Password required'
    if(confirmPassword === ''){
      errors['confirmPassword'] = 'Re-enter password'
    }
    if(password !== confirmPassword && confirmPassword !== '')
      errors['confirmPassword'] = 'Pass. must match'

    if(errors.firstName || errors.lastName || errors.password || errors.confirmPassword) {
      this.setState({ errors })
      isValid = false
    }

    return isValid
  }

  completeSignup = event => {
    event.preventDefault()
    const { email, firstName, lastName, password } = this.state
    if(this.verifyForm()) {
      this.props.signup({ email, firstName, lastName, password })
      .then(res => {
        this.context.router.history.push('/')
      })
      .catch(err => {
        const { errors } = this.state
        errors['signup'] = 'Signup failed'
        this.setState({ errors })
      })
    }
  }
  
  render() {
    return (
      <div className='signupContainer'>
        <div className='signupContent'>
        <Navbar />
          {this.state.emailVerified &&
            <form className='signupInfo' onSubmit={this.onCompleteSignup}>
              <span className='signupNameFields'>
                <span className='firstName'>
                {this.state.errors.firstName 
                  && <label style={{color: 'red'}}>{this.state.errors.firstName}</label>
                }
                  <input
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    onChange={this.onChange}
                    value={this.state.firstName}/>
                </span>
                <span className='lastName'>
                  {this.state.errors.lastName 
                    && <label style={{color: 'red'}}>{this.state.errors.lastName}</label>
                  }
                  <input
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    onChange={this.onChange}
                    value={this.state.lastName}/>
                </span>
              </span>
              <br/><br/>
              <span className='passwordFields'>
                <span>
                  {this.state.errors.password 
                    && <label style={{color: 'red'}}>{this.state.errors.password}</label>
                  }
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={this.onChange}
                    value={this.state.password}/>
                </span>
                <span>
                  {this.state.errors.confirmPassword 
                    && <label style={{color: 'red'}}>{this.state.errors.confirmPassword}</label>
                  }
                  <input
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    onChange={this.onChange}
                    value={this.state.confirmPassword}/>
                </span>
              </span>
              {this.state.errors.signup && <h4 style={{color: 'red'}}>{this.state.errors.signup}</h4>}
              <button onClick={this.completeSignup}>Signup</button>
            </form>
          }
          {!this.state.emailVerified &&
            <form className='signupEmail' onSubmit={this.verifyEmail}>
              <h3>User Signup</h3>
              {this.state.errors.email && <p style={{color: 'red'}}>{this.state.errors.email}</p>}
              <input
                type='email'
                name='email'
                placeholder='Please enter your e-mail address...'
                onChange={this.onChange}
                value={this.state.email}/>
            </form>
          }
        </div>
      </div>
    )
  }
}

Signup.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { signup })(Signup)
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/login.js';
import mapStateToProps from '../utils/redux';

import '../css/Navbar.css'

class NavbarLogin extends Component {
  state = {
    fullName: '',
    isAuthenticated: false
  }
  componentWillMount = () => {
    if(this.props.user.isAuthenticated){
      const { firstName, lastName } = this.props.user.info
      if (firstName || lastName)
        this.setState({ fullName: `${firstName} ${lastName}`})
    }
  }

  logout = () => {
    this.props.logout()
  }

  render() {
    const notLoggedIn = (
      <ul className='navigationNotLoggedIn'>
        <Link to={'/login'}><h4>Login</h4></Link>
        <Link to={'/signup'}><h4>Signup</h4></Link>
      </ul>
    )

    const loggedIn = (
      <ul className='navigationLoggedIn'>
        <Link to='/profile' className='navigationUser'>
          <h4>{this.state.fullName}</h4>
        </Link>
        <h4 onClick={this.logout} className='logoutButton'>Logout</h4>
      </ul>
    )    
    return (
      <header>
        <nav>
          <ul className="navBar">
            {this.props.user.isAuthenticated ? loggedIn : notLoggedIn}
            {/* <Link to={'/login/'}><h4>Login</h4></Link>
            <Link to={'/signup/'}><h4>Signup</h4></Link> */}
          </ul>
        </nav>
      </header>
    );
  }
}

export default connect(mapStateToProps, { logout })(NavbarLogin);

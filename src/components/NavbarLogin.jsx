import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css'

class NavbarLogin extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="navBar">
            <Link to={'/login/'}><h4>Login</h4></Link>
            <Link to={'/signup/'}><h4>Signup</h4></Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavbarLogin;

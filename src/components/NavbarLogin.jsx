import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css'

class NavbarLogin extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="navBar">
            <Link to={'/login/'}>Login</Link>
            <Link to={'/signup/'}>Signup</Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavbarLogin;

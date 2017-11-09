import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarLogin from './NavbarLogin.jsx';

import '../css/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <header>
        <Link to={'/'}><h1>Movier</h1></Link>
        <NavbarLogin />
      </header>
    );
  }
}

export default Navbar;

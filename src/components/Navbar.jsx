import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <header>
        <Link to={'/'}>
          <h1>Movier</h1>
        </Link>
      </header>
    );
  }
}

export default Navbar;

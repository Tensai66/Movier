import React, { Component } from 'react';
import Search from './Search.jsx';
import Navbar from './Navbar.jsx';

import '../css/Home.css'

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Navbar />
        <Search />
      </div>
    );
  }
}

export default Home;

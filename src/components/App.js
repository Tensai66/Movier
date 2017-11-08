import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Movier</h1>

        <input className="searchField" value="search here..."/>
        <button className="searchButton">Search</button>
      </div>
    );
  }
}

export default App;

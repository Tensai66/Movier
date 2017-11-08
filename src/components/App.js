import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { push } from 'react-router-redux';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', // Initial value of the search bar which is empty 
      suggestions: [] // Array which will hold the suggestions for search bar
    };
  }

  handleChange = (e) => {
    this.setState({
      value : event.target.value
    })
    this.props.onChange(event.target.value)
  }

  handleKeyDown = (e) => {
    if (e.key == 'Enter') {
      return this.handleSubmit(this.state.value) // Allowing enter button for submit 
    }
  }

  handleSubmit = (searchValue) => {
    // submit function for search
  }
  render() {
    return (
      <div className="App">
        <h1>Movier</h1>

        <input 
          className="searchField" 
          value={this.state.value}
          placeholder="search movie title..."/>
        <button className="searchButton">Search</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import SearchResults from './SearchResults';

import '../css/Search.css';

class Search extends Component {
  state = {
    search: '',
    results: []
  }

  onChange = (e) => {
    this.setState({[e.target.name]: [e.target.value]}) // Changes the specified targets state value
  }

  searchMovies = (e) => {
    e.preventDefault();

    const key = '471d212907833bde6a872c6b03ecbfdb';

    fetch('https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${this.state.search}&page=1&include_adult=false')
      .then(response => {
        if (response.status != 200) {
          console.log('Error: ' + response.status);
          return;
        }
        response.json().then(data => {
          const results = data.results;
          this.setState({ results });
        });
      })

      .catch(err => {
        console.log('Fetch error :-S', err)
      })
  }
  render() {
    return (
        <div className="searchBarContainer">
          <form className="searchContent">
            <input
              type="text"
              onChange={this.onChange}
              value={this.state.search}
              className="searchBar"
              placeholder="Search a movie title..."
              name="search" />
          </form>
        </div>
    );
  }
}

export default Search;

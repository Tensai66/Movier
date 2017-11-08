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

    const key = '471d212907833bde6a872c6b03ecbfdb';
    // Required so the state doesn't do API request on empty string causing 401/422
    // eslint-disable-next-line
    if(this.state.search == '') {
      return;
    }
    // API fetch request with return response for data, the data is then added to the array and the state is updated
    fetch('https://api.themoviedb.org/3/search/movie?api_key=' + key + '&language=en-US&query=' + this.state.search + '&page=1&include_adult=false')
      .then(response => {
        // eslint-disable-next-line
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

  // handleKeyDown = (e) => {
  //   // eslint-disable-next-line
  //   if (e.key == 'Enter') {
  //     return this.handleSubmit(this.searchMovies);
  //   }
  //   console.log("worked");
  // }

  render() {
    return (
        <div className="searchBarContainer">
          <form onSubmit={this.handleSubmit} className="searchContent">
            <input
              type="text"
              onChange={this.onChange}
              value={this.state.search}
              className="searchBar"
              placeholder="Search a movie title..."
              name="search" required />
            <SearchResults results={this.state.results} />
          </form>
        </div>
    );
  }
}

export default Search;

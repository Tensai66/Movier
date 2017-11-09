import React, { Component } from 'react';

class MovieSplash extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    const key = '471d212907833bde6a872c6b03ecbfdb';

  }
  render() {
    return (
        <section className="latestMoviesContainer">
          <h2>Latest Releases</h2>
        </section>
    );
  }
}

export default MovieSplash;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/MovieSplash.css';

class MovieSplash extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    const key = '471d212907833bde6a872c6b03ecbfdb';
    let date = new Date(),
      today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
      month = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

      fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + key + '&language=en-US&query=&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=' + month + '&primary_release_date.lte=' + today)
        .then(response => {
          if (response.status !== 200) {
            console.log('Error: ' + response.status);
            return;
          }
          response.json().then(data => {
            const movies = data.results;
            this.setState({ movies });
          });
        })
        .catch(err => {
          console.log('Fetch error :-S', err)
        })
  }
  render() {
    return (
        <section className="latestMoviesContainer">
          <h2>Latest Releases</h2>
          <div className="newMovies">
            {this.state.movies.map((movie, index) => {
              return (
                <Link to={`/movie/${this.state.movies[index].id}`} key={index} className="movieLink">
                  <img src={this.state.movies[index].poster_path === null ? 'http://via.placeholder.com/640x960' : `https://image.tmdb.org/t/p/w640/${this.state.movies[index].poster_path}`} alt={`${this.state.movies.title} poster`} className="imgResponsive" />
                  
                  <div className="movieInfo">
                    <h3>{this.state.movies[index].title}</h3>
                    <p>{this.state.movies[index].release_date}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
    );
  }
}

export default MovieSplash;

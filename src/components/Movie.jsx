import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Search from './Search.jsx';

import '../css/Movie.css';

class Movie extends Component {
  state = {
    movie: {
      genres: [],
      videos: {
        results: []
      }
    }
  }

  getData = () => {
    const key = '471d212907833bde6a872c6b03ecbfdb';
    const movieId = window.location.pathname.substring(7);

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US&append_to_response=credits,videos`)
    .then(response => {
      if (response.status !== 200) {
        console.log('Error: ' + response.status);
        return;
      }

      response.json().then(data => {
        const movie = data;
        this.setState({ movie });
      });

    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    })
  }

  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.movie !== this.state.movie) {
      this.getData();
    }
  }

  addMovie = movie =>
  this.props
    .createMovie(movie)
    .then(() => this.props.history.push("/"));

  render() {
    return (
      <div className="movieContainer">
        <Navbar />
        <Search className="searchContent" />

        <div className="movieContent">
          <div className="moviePoster">
            <img src={this.state.movie.poster_path === null ? 'http://via.placeholder.com/640x960' : `https://image.tmdb.org/t/p/w640${this.state.movie.poster_path}`} alt={`${this.state.movie.title} poster`} className="movieImg" />
            <h2 className="movieTitle">{this.state.movie.title}</h2>
          </div>

          <section className="movieDetails">
            {this.state.movie.videos.results.length > 0 && 
              <div className="ytPlayer ytContainer16x9 ytContainer4x3">
                <iframe src={`https://www.youtube.com/embed/${this.state.movie.videos.results[0].key}`} title="movietrailer"></iframe>;
              </div>
            }
            <ul className="movieDetails">
              <li><span className="weight">Release date:</span> {this.state.movie.release_date}</li>
              <li><span className="weight">Rating:</span> {this.state.movie.vote_average}</li>

              <li><span className="weight">Genres: </span> {this.state.movie.genres.map((element, index) => {
                  if (index < this.state.movie.genres.length - 1) {
                    return this.state.movie.genres[index].name + ', '
                  } else {
                    return this.state.movie.genres[index].name
                  }
                })}
              </li>
              <li><span className="weight">Overview:</span> {this.state.movie.overview}</li>
            </ul>
            {/* {this.state.movie.videos.results.length > 0 && 
              <div className="ytPlayer ytContainer16x9 ytContainer4x3">
                <iframe src={`https://www.youtube.com/embed/${this.state.movie.videos.results[0].key}`} title="movietrailer"></iframe>;
              </div>
            } */}
          </section>
        </div>
      </div>
    );
  }
}

export default Movie;
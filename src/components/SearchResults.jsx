import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    
  }
  render() {
    const imageLink = 'https://image.tmdb.org/t/p/w300';
    return (
      <ul id="results" onClick={this.handleClick}>
        {this.props.results.map((element, index) => {
          return(
            <li key={index} onClick={this.handleClick}>
              <Link to={`/movie/${this.props.results[index].id}`} >
                <img src={this.props.results[index].poster_path === null ? 'http://via.placeholder.com/640x960' : `${imageLink}${this.props.results[index].poster_path}`} alt={`${this.props.results[index].title} poster`} className="resultPoster" />
                <div>
                  <p>{this.props.results[index].title}</p>
                  <p>{this.props.results[index].release_date}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default SearchResults;

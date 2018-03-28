import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MoviePosterComponent.css';
import imdb from '../img/IMDb.ico';

const MoviePosterComponent = ({ movie }) => (
  <div className="movie-poster">
    <img src={movie.content.images.packshot.url} alt={movie.content.title}/>
    <h3>{movie.content.title}</h3> 
    <div className="info">
    { movie.content.imdb ? 
      <div className="rating">
        <a href={movie.content.imdb.url} target="_blank"> <img src={imdb} alt="imbd link"/> </a> <p>{movie.content.imdb.rating}</p>
      </div>
      : ""}
      <div className="year">
        {movie.content.production.year}
      </div>
      <div className="duration">
        {movie.content.duration.readable}
      </div>
    </div> 
    <p className="synopsis">{movie.content.synopsis}</p>
  </div>
);

MoviePosterComponent.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MoviePosterComponent;
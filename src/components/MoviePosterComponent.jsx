import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MoviePosterComponent.css';

const MoviePosterComponent = ({ movie }) => (
  <div className="movie-poster">
    <img src={movie.content.images.boxart.url}/>
    <h4>{movie.content.title}</h4>
    <p>{movie.content.synopsis}</p>
  </div>
);

MoviePosterComponent.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MoviePosterComponent;
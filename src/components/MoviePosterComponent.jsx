import React from 'react';
import PropTypes from 'prop-types';

const MoviePosterComponent = ({ movie }) => (
  <div className="movie-poster">
    <img src={movie.content.images.boxart.url}/>
    <p>{movie.content.title}</p>
  </div>
);

MoviePosterComponent.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MoviePosterComponent;
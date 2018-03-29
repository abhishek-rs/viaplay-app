import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import '../styles/MovieCarouselBlock.css';
import imdb from '../img/IMDb.ico';

class MovieCarouselBlock extends React.Component{

  render(){
    const { block } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    let posters = block ?
    block.reduce((res, movie, index) => {
      res.push(
        <div className="carousel-block" key={movie.system.productKey}>
          <img src={movie.content.images.packshot.url} alt={movie.content.title}/>
          <div className="info">
            <h3>{movie.content.title}</h3> 
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
              <p className="synopsis">{movie.content.synopsis}</p>
          </div>          
        </div>  
      );
      return res;
    }, [])
  : [];

  return (
    <div className="blocks-carousel">
           <Slider {...settings}>
            {posters}
           </Slider>
    </div>
    );
  }
}

MovieCarouselBlock.propTypes = {
  block: PropTypes.array,
};

export default MovieCarouselBlock;
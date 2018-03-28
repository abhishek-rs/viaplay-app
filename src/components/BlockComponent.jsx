import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import MoviePosterComponent from './MoviePosterComponent';
import '../styles/BlockComponent.css';

const getBlockFromApi = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
  return {};
};

export default class BlockComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      carousel: true
    };
  }
  
  async componentWillMount() {
    const moviesInTheBlock = await getBlockFromApi(this.props.block._links.self.href);
    this.setState(
      { 
        block: moviesInTheBlock._embedded["viaplay:products"],
      });
  }
  
  render(){
    const { block } = this.state;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let blockMovies = block ?
                      block.reduce((res, m) => {
                        res.push(
                          <MoviePosterComponent
                            key={m.system.productKey}
                            movie={m}
                          />
                        );
                        return res;
                      }, [])
                    : []; 
    let posters = block ?
    block.reduce((res, m) => {
      res.push(
        <img
          src={m.content.images.boxart.url}
        />
      );
      return res;
    }, [])
  : [];

    return (
      <div className="block-container">
        <h2>{this.props.block.title}</h2>

        {this.state.carousel ?
        <div className="blocks-carousel">
           <Slider {...settings}>
            {posters}
           </Slider>
        </div>
        :
        <div className="blocks-container">
          {blockMovies}
        </div>
        }
      </div>
    );
  } 
}

BlockComponent.propTypes = {
  block: PropTypes.object.isRequired,
};


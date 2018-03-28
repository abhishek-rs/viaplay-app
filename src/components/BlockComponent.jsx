import React from 'react';
import PropTypes from 'prop-types';
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
    let blockMovies = block ?
                      block.reduce((res, m) => {
                        res.push(
                          <MoviePosterComponent
                            key={m.id}
                            movie={m}
                          />
                        );
                        return res;
                      }, [])
                    : []; 
  
    return (
      <div className="block-container">
        <h2>{this.props.block.title}</h2>
        <div className="blocks-container">
          {blockMovies}
        </div>
      </div>
    );
  } 
}

BlockComponent.propTypes = {
  block: PropTypes.object.isRequired,
};


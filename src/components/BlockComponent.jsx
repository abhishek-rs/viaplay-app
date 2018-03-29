import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-toggle-switch'
import MoviePosterComponent from './MoviePosterComponent';
import MovieCarouselBlock from './MovieCarouselBlock';
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
      carousel: false
    };
  }

  handleChange(checked) {
    checked ? 
    this.setState({ carousel: true })
    : this.setState({ carousel : false });
  }

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        carousel: !prevState.carousel
      };
    });
  };
  
  async componentWillMount() {
    const moviesInTheBlock = await getBlockFromApi(this.props.block._links.self.href);
    this.setState(
      { 
        block: moviesInTheBlock._embedded["viaplay:products"],
      });
  }
  
  render(){
    const { block } = this.state;
    
    let movieGrid = block ?
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

    return (
      <div className="blocks-container">
    
        <h2>{this.props.block.title}</h2>
        <div className="carousel-switch">
          <p>Carousel mode</p>
          <Switch
            onClick={this.toggleSwitch} on={this.state.carousel}
          />
        </div>
        {this.state.carousel ?
          <MovieCarouselBlock block={block} />
        :
        <div className="grid-container">
          {movieGrid}
        </div>
        }
      </div>
    );
  } 
}

BlockComponent.propTypes = {
  block: PropTypes.object.isRequired,
};


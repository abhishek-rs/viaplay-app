import React from 'react';
import BlockComponent from './BlockComponent';
const baseURL = "https://content.viaplay.se/pcdash-se/film";

const getMovieBlocksFromApi = async () => {
  try {
    const response = await fetch(baseURL);
    return response.json();
  } catch (error) {
    console.error(error);
  }
  return {};
};

const getMovieFromApi = async (url) => {
  try {
    let fetchURL = url;
    const response = await fetch(fetchURL);
    return response.json()._embedded.viaplay.product;
  } catch (error) {
    console.error(error);
  }
  return {};
};

export default class MoviesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.getDefaultMovieBlocksFromApi = this.getDefaultMovieBlocksFromApi.bind(this);
  }

  async componentWillMount() {
      await this.getDefaultMovieBlocksFromApi();
  }

  async getDefaultMovieBlocksFromApi() {
    const movies = await getMovieBlocksFromApi();
    this.setState(
      { 
        movies: movies._embedded["viaplay:blocks"],
      });
  }

  render() {
    const { movies } = this.state;
    let blocks, res = [];

    blocks = movies ?
                      movies.reduce((res, m) => {
                        res.push(
                          <BlockComponent
                            key={m.id}
                            block={m}
                          />
                        );
                        return res;
                      }, [])
                    : []; 
    return (
      <div className="main-container">
        <div className="blocks-container">
          {blocks}
        </div>
      </div>
    );
  }
}

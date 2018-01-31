import React from 'react';

import GhibliService from '../../services/api';

import {Movie} from './Movie';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'movieData': []
        }
        this.ghibliService = new GhibliService();
    }

    triggerFilmRequest() {
      this.ghibliService.getFilms()
        .then((data) => {
          this.movieDataParser(data);
      });
    }

    movieDataParser(movieData) {
      this.setState({
        movieData
      })
    }

    render() {
        return(
            <React.Fragment>
                <h1>Home</h1>
                <button onClick={this.triggerFilmRequest.bind(this)}>
                    Click Here
                </button>
                {
                  this.state.movieData.forEach((movie) => {
                    Movie(movie);
                  })
                }
            </React.Fragment>
        )
    }
}

export default Home;
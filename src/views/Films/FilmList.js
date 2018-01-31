import React, { Component } from 'react';

import List from '../../components/List/index';

import FilmSummary from './components/FilmSummary/index';

class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmData: props.films || null
    };
  }

  renderFilmSummaries() {
    return this.state.filmData.map((film) => {
      return <FilmSummary key={film.id} film={film}/>
    });
  }

  render() {
    return (
      <List className="films">
        {this.state.filmData ? this.renderFilmSummaries() : null}
      </List>
    )
  }
}

export default FilmList;
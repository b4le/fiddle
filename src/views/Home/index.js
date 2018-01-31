import React from 'react';

import GhibliService from '../../services/api';

import Button from '../../components/Button/index';
import FilmList from '../Films/FilmList';
import PeopleList from '../People/PeopleList';

class Home extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentList: null,
            currentDataset: null
        }

        // Bind functions
        this.triggerFilmRequest = this.triggerFilmRequest.bind(this);
        this.triggerPeopleRequest = this.triggerPeopleRequest.bind(this);

        // Instantiate Services
        this.ghibliService = new GhibliService();
    }

    triggerFilmRequest() {
      this.ghibliService.getFilms()
        .then((data) => {
          this.setState({
            'currentList': 'film',
            'currentDataset': data
          });
      });
    }

    triggerPeopleRequest() {
        this.ghibliService.getPeople()
          .then((data) => {
            this.setState({
                'currentList': 'people',
                'currentDataset': data
            });
        });
      }

    render() {
        return(
            <React.Fragment>
                <h1>Studio Ghibli</h1>
                <Button 
                    onClick={this.triggerFilmRequest}
                    content='Load Films'
                />
                <Button 
                    onClick={this.triggerPeopleRequest}
                    content='Load People'
                />
                { this.state.currentList === 'film' ?
                    <FilmList films={this.state.currentDataset}/> : null
                }
                { this.state.currentList === 'people' ?
                    <PeopleList people={this.state.currentDataset}/> : null
                }
            </React.Fragment>
        )
    }
}

export default Home;
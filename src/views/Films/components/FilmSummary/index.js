import React, {Component} from 'react';

import './FilmSummary.css';

class FilmSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: props.film
        };
    }

    render() {
        return (
            <section className="film">
                <h2 className="film__title">
                    {this.state.film.title}
                </h2>
                <p className="film__description">
                    {this.state.film.description}
                </p>
                <h3 className="film__director">
                    {this.state.film.director}
                </h3>
                <div className="film__review">
                    {this.state.film.rt_score}
                </div>
            </section>
        )
    }
}

export default FilmSummary;
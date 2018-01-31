import React, {Component} from 'react';

import './PeopleSummary.css';

class PeopleSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: props.people
        };
    }

    render() {
        return (
            <section className="person">
                <h2 className="person__name">
                    {this.state.people.name}
                </h2>
                <dl className="person__stats">
                    <dt>Gender</dt>
                    <dd>{this.state.people.gender}</dd>
                    <dt>Age</dt>
                    <dd>{this.state.people.age}</dd>
                    <dt>Eye Colour</dt>
                    <dd>{this.state.people.eye_color}</dd>
                    <dt>Hair Colour</dt>
                    <dd>{this.state.people.eye_color}</dd>
                </dl>
            </section>
        )
    }
}

export default PeopleSummary;
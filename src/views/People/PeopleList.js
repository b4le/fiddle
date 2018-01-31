import React, { Component } from 'react';

import PeopleSummary from './components/PeopleSummary';

class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleData: props.people || null
    };
  }

  renderPeopleSummaries() {
    return this.state.peopleData.map((people) => {
      return <PeopleSummary key={people.id} people={people}/>
    });
  }

  render() {
    return (
      <section className="people-list">
        {this.state.peopleData ? this.renderPeopleSummaries() : null}
      </section>
    )
  }
}

export default PeopleList;
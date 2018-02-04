import React, { Component } from 'react';

class List extends Component {
  render() {
    return(
      <section className={this.props.className}>
        {this.props.children}
      </section>
    )
  }
}

export default List;
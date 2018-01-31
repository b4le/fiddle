import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props)
    
    this.buttonClass = 'button';
    if (props.type) {
      this.buttonClass = this.buttonClass + props.type;
    }
    if (props.modifier) {
      this.buttonClass = this.buttonClass + props.modifier;
    }
  }
  
  render() {
    return(
      <section className={this.props.className}>
        {this.props.children}
      </section>
    )
  }
}

export default List;
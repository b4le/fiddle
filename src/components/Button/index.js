import React, { Component } from 'react';

import './button.css';

class Button extends Component {
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
    return (
      <a 
        onClick={this.props.onClick ? this.props.onClick : null}
        href={this.props.href ? this.props.href : null}
        className={this.buttonClass}>
          {this.props.content ? this.props.content : 'Click here'}
      </a>
    )
  }
}

export default Button;
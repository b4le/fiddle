import React, { Component } from 'react';

import './listitem.css';

class ListItem extends Component {
  parseData() {
    return Object.entries(this.props.data).map((dataItem, index) => {
      const key = dataItem[0].replace(/_/g, " ").toUpperCase();
      const value = dataItem[1];

      return (
        <article className='dataItem__row' key={index}>
          <div className='dataItem__key'>{key}</div>
          <div className='dataItem__value'>{value}</div>
        </article>
      ) 
    })
  }
  
  render() {
    return(
      <figure className='dataItem'>
        {this.parseData()}
      </figure>
    )
  }
}

export default ListItem;
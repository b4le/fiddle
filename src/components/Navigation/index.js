import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {CATEGORY_TYPES} from '../../services/consts';

import './navigation.css';

class Navigation extends Component {
  generateCategories() {
    return Object.entries(CATEGORY_TYPES).map((category, index) => {
      const categoryKey = category[0];
      const categoryText = category[1];
      const categoryLink = `/${categoryText}`;
      return <Link className='navigation__link' to={categoryLink} key={categoryKey}>{categoryText.toUpperCase()}</Link>
    });
  }
  
  render () {
    return(
      <section className='navigation-wrapper'>
        <section className='navigation navigation--primary'>
          <h1 className='navigation__title'>Studio Ghibli</h1>
        </section>
        <section className='navigation navigation--secondary'>
          {this.generateCategories()}
        </section>
      </section>
    )
  }
}

export default Navigation;
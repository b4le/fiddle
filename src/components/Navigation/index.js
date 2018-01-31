import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {
  render () {
    return(
      <section className='navigation'>
        <Link to='/'>Home</Link>
      </section>
    )
  }
}

export default Navigation;
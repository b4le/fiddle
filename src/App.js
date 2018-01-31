import React, { Component } from 'react';

import './App.css';

import Home from './views/Home/index';
import About from './views/About/index';

import { 
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
          <section className="navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>  
            </Switch>
          </section>
        </Router>
    );
  }
}

export default App;

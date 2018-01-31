import React, { Component } from 'react';

import './App.css';

import Navigation from './components/Navigation/index';

import Home from './views/Home/index';

import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>
            <Navigation></Navigation>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
          </React.Fragment>
        </Router>
    );
  }
}

export default App;

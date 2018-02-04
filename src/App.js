import React, { Component } from 'react';

import { CATEGORY_TYPES } from './services/consts';

import Navigation from './components/Navigation/index';
import DataList from './views/DataList/index';


import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {

  generateRoutes() {
    return Object.entries(CATEGORY_TYPES).map((category, index) => {
      const categoryText = category[1];
      const categoryLink = `/${categoryText}`;
      return(
        <Route exact path={categoryLink} key={index} component={DataList}/>
      ) 
    });
  }

  render() {
    return (
        <Router>
          <React.Fragment>
            <Navigation></Navigation>
            <Switch>
              {this.generateRoutes()}
            </Switch>
          </React.Fragment>
        </Router>
    );
  }
}

export default App;

import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HomePage} from './public/home.js';
import {PortfolioPage} from './public/portfolio.js';
function App() {
  return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path ="/" component = {HomePage} />
            <Route exact path = "/portfolio" component = {PortfolioPage} />
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;

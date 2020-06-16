import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HomePage } from './public/home.js';
function App() {
  return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path ="/" component ={HomePage} />
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;

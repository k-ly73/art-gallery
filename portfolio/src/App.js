import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage  from './components/home.js';
import PortfolioPage from './components/portfolio.js';

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

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage  from './components/home.js';
import PortfolioPage from './components/portfolio.js';
import AboutPage from './components/about.js';
import ContactPage from './components/contact.js';
class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path ="/" component = {HomePage} />
              <Route exact path = "/portfolio" component = {PortfolioPage} />
              <Route exact path = "/about" component = {AboutPage} />
              <Route exact path = "/contact" component = {ContactPage} />
            </Switch>
          </Router>
        </React.Fragment>
    );
  }
} export default App;

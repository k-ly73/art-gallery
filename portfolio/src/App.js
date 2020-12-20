import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage  from './components/home';
import PortfolioPage from './components/portfolio';
import AboutPage from './components/about';
import ContactPage from './components/contact';


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

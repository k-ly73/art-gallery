import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage  from './components/home.js';
import PortfolioPage from './components/portfolio.js';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path ="/home" eact component = {HomePage} />
              <Route exact path = "/portfolio" exact component = {PortfolioPage} />
            </Switch>
          </Router>
        </React.Fragment>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

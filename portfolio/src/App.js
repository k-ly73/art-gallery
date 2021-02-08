import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage  from './components/home';
import PortfolioPage from './components/portfolio';
import AboutPage from './components/about';
import ContactPage from './components/contact';
import Application from './components/application';
import UserProvider from './components/userprovider';

class App extends Component {
  render() {
    return (
        <UserProvider>
          <Application />
        </UserProvider>
    );
  }
} export default App;

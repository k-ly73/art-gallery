import React, { Component } from 'react';
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

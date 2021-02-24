import React from 'react';
import Application from './components/application';
import UserProvider from './components/userprovider';

function App() {

  return (
      <UserProvider>
        <Application />
      </UserProvider>
  );
  
} export default App;

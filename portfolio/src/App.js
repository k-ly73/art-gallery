import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import PrivateRoute from './components/privateroute';
import SignIn from './components/signin';
import SignUp from './components/signup';
import ProfilePage from './components/profilepage';
import PortfolioPage from './components/portfolio';
import HomePage from './components/home';
import DashBoard from './components/dashboard';
import { AuthProvider } from './assets/contexts/auth';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute path="/portfolio" component={PortfolioPage}/>
          <PrivateRoute path="/dashboard" component={DashBoard}/>
          <PrivateRoute exact path="/profilepage" component={ProfilePage}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
  
} export default App;

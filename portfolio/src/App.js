import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import SignIn from './components/signin';
import SignUp from './components/signup';
import ProfilePage from './components/profilepage';
import PortfolioPage from './components/portfolio';
import { AuthProvider } from './assets/contexts/auth';

function App() {

  return (
    <Container 
        className="d-flex align-items-center justify-content-center"
        style={{minHeight: "100vh"}}
    >
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/"component={ProfilePage}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/signin" component={SignIn}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
     
    </Container>

  


  );
  
} export default App;

import React, { useContext } from "react";
import {Router} from "@reach/router";
import SignIn from "./signin";
import SignUp from "./signup";
import PasswordReset from "./passwordreset";
import ProfilePage from "./profilepage";
import {UserContext} from './userprovider';
 
function Application() {
    const user = useContext(UserContext);
    return (
            user ?
            <ProfilePage />
        : 
            <Router>
                <SignUp path="signup"/>
                <SignIn path="/"/>
                <PasswordReset path="passwordReset" />
            </Router>
    );
}

export default Application
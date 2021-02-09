import React from "react";
import {Router} from "@reach/router";
import SignIn from "./signin";
import SignUp from "./signup";
import PasswordReset from "./passwordreset";

function Application() {
    const user = null;
    return (
        user ?
        <div></div>
        : 
        <Router>
            <SignUp path="signup"/>
            <SignIn path="/"/>
            <PasswordReset path="passwordReset" />
        </Router>
    );
}

export default Application
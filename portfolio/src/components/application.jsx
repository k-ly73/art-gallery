

function Application() {
    const user = null;
    return (
        user ?
        <div></div>
        : 
        <Router>
            <SignUp path="signup"/>
            <SignIn path="/"/>
            <PasswordREset path="passwordReset" />
        </Router>
    );
}

export default Application
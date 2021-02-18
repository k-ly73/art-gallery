import React, {useState} from 'react';
import { Link } from "@reach/router";
import { auth } from '../assets/firebase/firebase';
import './../assets/css/form.css';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            setError("Error signing in with email and password");
            console.error("Error signing in with email and password", error);
        })
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'usePassword') {
            setPassword(value);
        }
    }

    return (
        <div className="wrapper wrapper-w960 center"> 
            <div className="form-card mb-3">
            <h1>Sign In</h1>
                {error !== null && <div>{error}</div>}
                <form className="">
                    <div className = "input-group">

                        <div className = "input-group">
                            <input 
                                name="userEmail" 
                                type="email" 
                                placeholder="Your Email" 
                                
                            required/>
                        </div>

                        <div className = "input-group">
                            <input 
                                name="userPassword" 
                                type="password" 
                                placeholder="Your Password" 
                                
                            required/>
                        </div>

                                        
                        <button className="btn btn-primary" onClick={(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
                            Sign in
                        </button>
                    </div>
                </form>
                <p>or</p>
                <button>
                    Sign in with Google
                </button>
                <p>
                    Don't have an account?{" "}
                    <Link to="signUp">
                        Sign up here
                    </Link>{" "}
                    <br />{" "}
                    <Link to = "passwordReset">
                        Forgot Password?
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default SignIn
import React, {useState} from 'react';
import { Link } from "@reach/router";
import { auth, signInWithGoogle } from '../assets/firebase/firebase';
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
        <div className="p-t-180 bg-light-colors text-center">
            <div className="wrapper"> 
                <div className="form-card">
                <h1>Sign In</h1>
                    {error !== null && <div>{error}</div>}
                    <form className="">
                        <div className = "input-group">

                            <div className = "input-group">
                                <input 
                                    name="userEmail" 
                                    type="email" 
                                    placeholder="Your Email" 
                                    onChange = {(event) => onChangeHandler(event)}
                                required/>
                            </div>

                            <div className = "input-group">
                                <input 
                                    name="userPassword" 
                                    type="password" 
                                    placeholder="Your Password" 
                                    onChange = {(event) => onChangeHandler(event)}
                                required/>
                            </div>

                                            
                            <button type="button" className="btn-success block" onClick={(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
                                Sign in
                            </button>
                        </div>
                    </form>
                    <p>or</p>
                    <button type="button" className="btn-danger block" onClick={() => {signInWithGoogle();}}>
                        Sign In With Google
                    </button>
                    <p>
                        Don't have an account?{" "}
                        <br />{" "}
                        <Link to="signup">
                            Sign up here
                        </Link>{" "}
                        <br />{" "}
                        <Link to="passwordReset">
                            Forgot Password?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SignIn
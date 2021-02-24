import React, {useState} from 'react';
import { Link } from "@reach/router";
import { auth, generateUserDocument, signInWithGoogle } from '../assets/firebase/firebase';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState(null);

    const createUserWithEmailAndPassswordHandler = async (event, email, password) => {
        event.preventDefault();
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            generateUserDocument(user, {displayName});
        }
        catch (error){
            setError("Error signing up with email and password");
        }
        setEmail("");
        setPassword("");
        setDisplayName("");
    };

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if(name === "userEmail") {
            setEmail(value);
        }
        else if(name === "userPassword"){
            setPassword(value);
        }
        else if(name === "displayName"){
            setDisplayName(value);
        }
    };

    return (
        <div className="p-t-180 bg-light-colors text-center">
            <div className="wrapper"> 
                <div className="form-card mb-3">
                <h1>Create an Account</h1>
                    {error !== null && <div>{error}</div>}
                    <form className="">
                        <div className="input-group">
                            <div className="input-group">
                                <input 
                                    name="displayName" 
                                    type="text" 
                                    placeholder="Enter a Display Name" 
                                    onChange = {(event) => onChangeHandler(event)}
                                required/>
                            </div>

                            <div className="input-group">
                                <input 
                                    name="userEmail" 
                                    type="email" 
                                    placeholder="Enter An Email" 
                                    onChange = {(event) => onChangeHandler(event)}
                                required/>
                            </div>

                            <div className="input-group">
                                <input 
                                    name="userPassword" 
                                    type="password" 
                                    placeholder="Enter A Password" 
                                    onChange = {(event) => onChangeHandler(event)}
                                required/>
                            </div>

                                            
                            <button type="button" className="btn-success block" onClick={(event) => {createUserWithEmailAndPassswordHandler(event, email, password)}}>
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <p>or</p>
                    <button type="button" className="btn-danger block" onClick={() => {signInWithGoogle();}}>
                        Sign In With Google
                    </button>
                    <p>
                        Already Have an Account?{" "}
                        <br />{" "}
                        <Link to="/">
                            Sign in here
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
export default SignUp
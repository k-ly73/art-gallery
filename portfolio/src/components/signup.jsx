import React, {useState} from 'react';
import { Link } from "@reach/router";
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState(null);

    const createUserWithEmailAndPassswordHandler = (event, email, password) => {
        event.preventDefault();
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
        <div>
            <h1 className="text-center">Sign Up</h1>
            <div>
                {error !== null && (
                    <div> { error } </div>
                )}
            </div>
            <form className="">
                <label htmlFor="displayName">Display Name: </label>
                <input 
                    type="text" 
                    name="displayName"
                    value={displayName}
                    id="displayName" 
                    placeholder=""
                    onChange={event => onChangeHandler(event)}
                />
                <label htmlFor ="userEmail">Email: </label>
                <input 
                    type ="email" 
                    name ="userEmail"
                    value ={email}
                    id ="userEmail" 
                    placeholder=""
                    onChange={event => onChangeHandler(event)}
                />
                <label htmlFor ="userPassword">Display Name: </label>
                <input 
                    type="password" 
                    name="userPassword"
                    value={password}
                    id="userPassword"
                    placeholder="" 
                    onChange={event => onChangeHandler(event)}
                />
                <button
                    className="btn btn-success"
                    onClick={event => {
                        createUserWithEmailAndPassswordHandler(event, email, password)
                    }}
                >
                    Sign Up
                </button>
            </form>
            <p className="my-3">or</p>
            <button 
                className="bg-red-500 w-full py-2 text-white"
            >
                Sign In with Google
            </button>
            <p>Already have an account? {" "} </p>
            <Link to = "/" className="">
                Sign in here
            </Link>
            
        </div>
    )
}
export default SignUp
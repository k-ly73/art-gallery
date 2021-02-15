import React, {useState} from 'react';
import { Link } from "@reach/router";
import { auth } from '../assets/firebase/firebase';

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
        <div>

        </div>
    )
}
export default SignIn
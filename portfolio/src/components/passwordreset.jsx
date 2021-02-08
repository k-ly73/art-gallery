import React,  { useState } from "react";
import { Link } from "@reach/router";

const PasswordReset = () => {
    const [email, setEmail] = useState("");
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);
    const onChangeHandler = event => {
        const {name, value} = event.currentTarget;
        if(name === "userEmail"){
            setEmail(value);
        }
    };
    const sendResetEmail = event => {
        event.preventDefault();
    };
    return (
        <div className="mt-8">
            <h1 className="text-center">
                Reset your Password
            </h1>
            <div className="border border-blue">
                <form action="">
                    {emailHasBeenSent && (
                        <div className="py-3 bg-green-400">
                            An email has been sent to you!
                        </div>
                    )}
                    {error !== null && (
                        <div className="py-3 bg-red-600 w-full text-white">
                            {error}
                        </div>
                    )}
                    <label htmlFor="userEmail" className ="w-full block">
                        Email:
                    </label> 
                    <input
                        type="email"
                        name="userEmail"
                        id="userEmail"
                        value={email}
                        placeholder="Input your Email"
                        onChange={onChangeHandler}
                        className="mb-3 w-full"
                    />
                    <button className="text-white btn btn-primary">
                        Send me a reset link
                    </button>
                    <Link 
                        to ="/" 
                        className="my-2 text-center"
                    >
                        &larr; back to sign in page
                    </Link>
                </form>
            </div>
        </div>
    )
};
export default PasswordReset;
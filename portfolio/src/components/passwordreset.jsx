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
    }
}
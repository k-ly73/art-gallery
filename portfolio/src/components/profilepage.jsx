import React, { userContext } from "react";
import {UserContext} from 'userprovider';
import { auth } from "../assets/firebase/firebase";

const ProfilePage = () => {
    const user = useContext(UserContext);
    const {photoURL, displayName, email} = user;
    return (
        <div className="mx-auto">
            <div className="flex border flex-col items-center md:flex-row md:items-start">
                
            </div>
        </div>
    )
}
import React, { useContext } from "react";
import {UserContext} from './userprovider';
import { auth } from "../assets/firebase/firebase";
import './../assets/css/home.css';
const ProfilePage = () => {
    const user = useContext(UserContext);
    const {photoURL, displayName, email} = user;
    return (
        <div className="mx-auto">
            <div className="">
                <p> Hello {displayName}</p>
                <p>{email}</p>
                <p>{photoURL}</p>
            </div>
            <button onClick ={() => {auth.signOut()}}>Sign Out</button>
        </div>
    )
}
export default ProfilePage
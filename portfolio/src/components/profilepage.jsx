import React, { useContext } from "react";
import {UserContext} from './userprovider';
import { auth } from "../assets/firebase/firebase";
import ToolBar from "./toolbar";
import './../assets/css/home.css';
const ProfilePage = () => {
    const user = useContext(UserContext);
    const {photoURL, displayName, email} = user;
    return (
        <div className="container">
            <ToolBar />
            <div className="p-t-180">
                <p> Hello {displayName}</p>
                <p>{email}</p>
                <p>{photoURL}</p>
            </div>
            <button onClick ={() => {auth.signOut()}}>Sign Out</button>
        </div>
    )
}
export default ProfilePage
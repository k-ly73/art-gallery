import React, { useContext } from "react";
import app from "../assets/firebase/firebase";
import ToolBar from "./toolbar";
import './../assets/css/home.css';
const ProfilePage = () => {

    return (
        <div>
            <div className="container">
                <ToolBar />
                <div className="p-t-180 wrapper">
                    <div className = "card mb-3">
                        <div classname = "row no-gutters">
                            <div className = "col-md-4">
                                <img src=""/>
                                     
                            </div>
                            <div className = "col-md-8">
                                <div className = "card-body">
                                    <h5 className = "card-title">{}</h5>
                                    <p className = "card-text">{}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <button onClick ={() => {app.auth().signOut()}}>Sign Out</button>
            </div>
        </div>
    )
}
export default ProfilePage
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../assets/css/toolbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faMale, faColumns, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth } from "../assets/contexts/auth";

const ToolBar = () => { 

    const { currentUser, logout } = useAuth();
    const [error, setError] = useState("");

    const history = useHistory();

    async function handleLogout() {
        setError("")
        try {
            await logout();
            history.push("/signin");
        } catch {
            setError("Failed to log out");        }
    }
    return (
        <nav className = "navbar navbar-expand-lg fixed-top">
            <div className = "container-fluid">
                {currentUser ?  
                <a className="navbar-brand" href="/dashboard">
                    <img src={require("../assets/images/PhotoBum-white.png")}
                    
                    />
                </a> :
                <a className="navbar-brand" href="/">
                    <img src={require("../assets/images/PhotoBum-white.png")}
                    
                    />
                </a>}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive"> 
                    <ul className = "navbar-nav ml-auto">
                        <li className = "nav-item active">
                            <Link 
                                to="/profilepage"
                                className="text-white"
                            >
                                <FontAwesomeIcon icon = {faMale} />
                                <p>Profile</p>
                            </Link>
                        </li>
                        <li className = "nav-item active">
                            <Link 
                                to="/dashboard"
                                className="text-white"
                            >
                                <FontAwesomeIcon icon = {faColumns} />
                                <p>DashBoard</p>
                            </Link>
                        </li>
                        <li className = "nav-item active">
                            <Link 
                                to="/portfolio"
                                className="text-white" 
                            >
                                <FontAwesomeIcon icon = {faBookOpen} />
                                <p>Album</p>
                            </Link>
                        </li>
                        <li className = "nav-item active">
                            <Link 
                                onClick={handleLogout}
                                className="text-white" 
                            >
                                <FontAwesomeIcon icon = {faSignOutAlt} />
                                <p>Log Out</p>
                            </Link>
                       
                         
                        </li>
<<<<<<< HEAD
                    </ul> 
                    
=======
                    </ul> : 
                    <ul className="navbar-nav ml-auto">
                        <li className = "nav-item active">
                            <Link 
                                to="/profilepage"
                                className="text-white"
                            >
                                <FontAwesomeIcon icon = {faSignInAlt} />
                                <p>Profile</p>
                            </Link>
                        </li>
                    </ul>
                    }
>>>>>>> parent of 5a9fbd3 (Revert "users can now add comments")
                    
                </div>
            </div>


        </nav>
    )
}

export default ToolBar;

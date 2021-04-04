import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../assets/css/toolbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faMale, faColumns, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
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
                <a className="navbar-brand" href="/">
                    <img src={require("../assets/images/PhotoBum-white.png")}
                    
                    />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    {currentUser ? 
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
                    </ul> : 
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <Button className="btn btn-primary">
                                <Link
                                    to="/signin"
                                    className="text-white"
                                >
                                    Sign In
                                </Link>
                            </Button>

                        </li>
                    </ul>
                    }
                    
                </div>
            </div>


        </nav>
    )
}

export default ToolBar;

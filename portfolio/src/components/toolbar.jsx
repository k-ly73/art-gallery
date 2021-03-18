import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../assets/css/toolbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faMale } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from "../assets/contexts/auth";

export default function ToolBar() { 

    const { currentUser } = useAuth();
    
    return (
        <nav className = "navbar navbar-expand-lg fixed-top ">
            <div className = "container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={require("../assets/images/PhotoBum-white.png")}
                    
                    />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className = "navbar-nav ml-auto">
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
                                to="/profilepage"
                                className="text-white"
                            >
                                <FontAwesomeIcon icon = {faMale} />
                                <p>Profile</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


        </nav>
        
    
        
        
        
    )
}

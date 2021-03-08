import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/toolbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComments, faBookOpen, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

class ToolBar extends Component { 

    render() {
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
                                    <p>Collection</p>
                                </Link>
                            </li>
                            <li className = "nav-item active">
                                <Link 
                                    to="/about"
                                    className="text-white"
                                >
                                    <FontAwesomeIcon icon = {faQuestionCircle} />
                                    <p>About</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                

            </nav>
           
      
         
            
         
        )
    }
} export default ToolBar
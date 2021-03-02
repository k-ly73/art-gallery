import React, {Component} from 'react';

import '../assets/css/toolbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComments, faBookOpen, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

class ToolBar extends Component { 

    render() {
        return (
            
            <nav className = "navbar navbar-expand-lg fixed-top justify-content-center">
                <div className = "container-fluid">
                    <a className="navbar-brand" href="/">PhotoBom</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className = "navbar-nav ml-auto">
                            <li className = "nav-item active">
                                <a className = "nav-link" href = "/portfolio">
                                    <FontAwesomeIcon icon = {faBookOpen} />
                                    <p>Collection</p>
                                </a>
                            </li>
                            <li className = "nav-item active">
                                <a className = "nav-link" href = "/about">
                                    <FontAwesomeIcon icon = {faQuestionCircle} />
                                    <p>About</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                

            </nav>
           
      
         
            
         
        )
    }
} export default ToolBar
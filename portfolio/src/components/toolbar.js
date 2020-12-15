import React, {Component} from 'react';

import '../assets/css/toolbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComments, faBookOpen, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

class ToolBar extends Component { 
    handleScroll = e => {

    }
    render() {
        return (
            
            <nav className = "navbar navbar-expand-lg fixed-top justify-content-center" onScroll = {this.handleScroll}>
                <ul className = "navbar-nav ml-auto">
                    <li className = "nav-item active">
                        <a className = "nav-link" href = "/">
                            <FontAwesomeIcon icon = {faHome} />
                            <p>Home</p>
                        </a>
                    </li>
                    <li className = "nav-item active">
                        <a className = "nav-link" href = "/contact">
                            <FontAwesomeIcon icon = {faComments} />
                            <p>Contact</p>
                        </a>
                    </li>
                    <li className = "nav-item active">
                        <a className = "nav-link" href = "/portfolio">
                            <FontAwesomeIcon icon = {faBookOpen} />
                            <p>Album</p>
                        </a>
                    </li>
                    <li className = "nav-item active">
                        <a className = "nav-link" href = "/about">
                            <FontAwesomeIcon icon = {faQuestionCircle} />
                            <p>About</p>
                        </a>
                    </li>
                </ul>

            </nav>
           
      
         
            
         
        )
    }
} export default ToolBar
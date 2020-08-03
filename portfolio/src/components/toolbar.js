import React, {Component} from 'react';

import '../assets/css/toolbar.css';

class ToolBar extends Component { 
    render() {
        return (
            
            <nav className = "navbar navbar-expand-lg">
                <ul className = "navbar-nav mx-auto">
                    <li className = "nav-item">
                        <a class = "nav-link" href = "/">Home</a>
                        </li>
                    <li className = "nav-item">
                        <a class = "nav-link" href = "/contact">Contact</a>
                    </li>
                    <li className = "nav-item">
                        <a class = "nav-link" href = "/portfolio">Album</a>
                    </li>
                    <li className = "nav-item">
                        <a class = "nav-link" href = "/about">About</a>
                    </li>
                </ul>

            </nav>
           
      
         
            
         
        )
    }
} export default ToolBar
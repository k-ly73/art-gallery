import React, {Component} from 'react';

import '../assets/css/toolbar.css';

class ToolBar extends Component {
    render() {
        return (
            <header>
                <nav className = "navbar navbar-expand-lg ">
                    <div className = "container-fluid">
                        <ul className = "mx-auto">
                            <li><a href = "/">Home</a></li>
                            <li><a href = "/portfolio">Contact</a></li>
                            <li><a href = "/portfolio">Album</a></li>
                            <li><a href = "/portfolio">About</a></li>
                        </ul>
                    </div>
                   
                </nav>
            </header>

         
        )
    }
} export default ToolBar
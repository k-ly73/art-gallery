import React, {Component} from 'react';

import '../assets/css/toolbar.css';

class ToolBar extends Component {
    render() {
        return (
            <div>
                <header className = "text-white">
                    <nav className = "navbar navbar-expand-lg mx-auto">
                        
                        <ul clasname = "navbar-nav navbar-center">
                            <li><a href = "/">Home</a></li>
                            <li><a href = "/portfolio">Contact</a></li>
                            <li><a href = "/portfolio">Album</a></li>
                            <li><a href = "/portfolio">About</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
         
        )
    }
} export default ToolBar
import React, {Component} from "react";
import '../assets/css/about.css';
import ToolBar from "./toolbar";


class AboutPage extends Component {
    render() {
        return (
            <div className = "App">
                <ToolBar></ToolBar>
                <body className = "skewed-bg">
                    <div className = "container">
                        <div className  = "content-wrapper p-300 center">
                                                             
                            <h1>Kevin Ly</h1>
                            <h2>UI Design & Photography</h2>
                            <div className = "image">
                                <img src = {require("../assets/images/ProfilePictureKevin.png")}/>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                           
                            
                        </div>
                    </div>
                </body>
            </div>
        )
    }
} 
export default AboutPage
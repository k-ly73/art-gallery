import React, {Component} from "react";
import '../assets/css/about.css';
import ToolBar from './toolbar.js';

class AboutPage extends Component {
    render() {
        return (
            <div className = "App">
                <div className = "bg-gray">
            
                    <div className = "container-fluid">
                        <ToolBar></ToolBar>
                        <div className = "row">
                            <div className = "col-sm-4">

                            </div>
                            <div className = "col-sm-4">
                                Sorry! There's nothing displayed here at the moment. 
                                The About page is currently undergoing changes but check
                                back later for updates
                            </div>
                            <div className = "col-sm-4">
                                
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        )
    }
} 
export default AboutPage
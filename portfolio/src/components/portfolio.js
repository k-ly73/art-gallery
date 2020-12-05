import React, { Component } from "react";
import PhotoGallery from "./gallery.js";
import ToolBar from './toolbar.js';
class PortfolioPage extends Component {
    render() {
        return (
            <div className = "App">
                
                <body>
                    
                    <ToolBar></ToolBar>
                    <div className = "container gallery-wrapper">
                        
                        
                        <PhotoGallery>

                        </PhotoGallery>      
                    </div>
                </body>
                
                 
            </div>
        )
    }
}
export default PortfolioPage

import React, { Component } from "react";
import PhotoGallery from "./gallery.js";
import ToolBar from './toolbar.js';
class PortfolioPage extends Component {
    render() {
        return (
            <div className = "App">
                
                <body>
                    <div className = "container-fluid">
                        <ToolBar></ToolBar>
                        <div className = "row text-center">
                            <div className = "col-md-12">
                                <div className = "header">
                                    Album
                                </div>
                                
                            </div>
                         
                        </div>
                        <PhotoGallery>

                        </PhotoGallery>      
                    </div>
                </body>
                
                 
            </div>
        )
    }
}
export default PortfolioPage

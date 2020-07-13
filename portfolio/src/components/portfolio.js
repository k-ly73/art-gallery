import React, { Component } from "react";
import PhotoGallery from "./gallery.js";


class PortfolioPage extends Component {
    render() {
        return (
            <div className = "App">
                <body>
                    <div className = "container-fluid">
                        <div className = "row">
                            <div className = "col-md-4">

                            </div>
                            <div className = "col-md-4">
                                <div className = "header">
                                    Album
                                </div>
                                
                            </div>
                            <div className = "col-md-4">
                                
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

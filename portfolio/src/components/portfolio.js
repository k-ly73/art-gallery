import React, { Component } from "react";
import {photos} from "./gallery.js";
import Gallery from "react-photo-gallery";

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

                        <div className = "row">
                            <div style={{width: "100%"}} >
                                <Gallery photos = {photos} />
                            </div>
                        </div>
                    </div>
                </body>
                
                 
            </div>
        )
    }
}
export default PortfolioPage

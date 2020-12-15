import React, { Component } from "react";
import PhotoGallery from "./gallery.js";
import ToolBar from './toolbar.js';
import Title from "./title.js";
import UploadForm from "./UploadForm.js";
class PortfolioPage extends Component {
    render() {
        return (
            // <div className = "App">
                
            //     <body>
                    
            //         <ToolBar></ToolBar>
            //         <div className = "container gallery-wrapper" style ={{marginTop: '100px'}}>
                        
            
            //             <PhotoGallery>

            //             </PhotoGallery>      
            //         </div>
            //     </body>
                
                 
            // </div>
            <div className = "App">
                <Title/>
                <UploadForm>

                </UploadForm>
            </div>
        )
    }
}
export default PortfolioPage

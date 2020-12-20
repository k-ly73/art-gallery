import React, { Component } from "react";
import PhotoGallery from "./gallery";
import ToolBar from './toolbar';
import Title from "./title";
import UploadForm from "./UploadForm";
import ImageGrid from './ImageGrid';
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
                <UploadForm />
                <ImageGrid />
                
            </div>
        )
    }
}
export default PortfolioPage

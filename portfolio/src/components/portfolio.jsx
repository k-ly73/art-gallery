import React from "react";
import ToolBar from './toolbar';
import Title from "./title";
import UploadForm from "./UploadForm";
import ImageGrid from './ImageGrid';
function PortfolioPage() {

   

    return (

        <div>
        
            <ToolBar/>
            <Title/>
            <UploadForm />
            <div>
                <ImageGrid />
            </div>
            

        </div>
    )

}
export default PortfolioPage

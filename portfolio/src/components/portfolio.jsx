import React from "react";
import ToolBar from './toolbar';
import Title from "./title";
import UploadForm from "./UploadForm";
import ImageGrid from './ImageGrid';
import '../assets/css/portfolio.css'
import { Container } from 'react-bootstrap';

function PortfolioPage() {



    return (

        <div className="ptb-200 bg-library">
            <Container>
                <ToolBar/>
                <Title/>
                <UploadForm />
                <ImageGrid />
            </Container>

            
            

        </div>
    )

}
export default PortfolioPage

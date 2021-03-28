import React, { useState } from "react";

//imported JSX files
import ToolBar from './toolbar';
import UploadForm from "./UploadForm";
import ImageGrid from './ImageGrid';
import Modal from './modal'

//CSS
import '../assets/css/portfolio.css'

//Bootstrap 
import { Container } from 'react-bootstrap';

import { useAuth } from '../assets/contexts/auth'

function PortfolioPage() {
    const [selectedImg, setSelectedImg] = useState(null);
    return (

        <div className="ptb-200 bg-library">
            <Container>
                <ToolBar/>
                <UploadForm/>
                <ImageGrid setSelectedImg={setSelectedImg}/>
                { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}

            </Container>

            
            

        </div>
    )

}
export default PortfolioPage

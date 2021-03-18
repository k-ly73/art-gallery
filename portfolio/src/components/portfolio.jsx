import React, { useState } from "react";
import ToolBar from './toolbar';
import Title from "./title";
import UploadForm from "./UploadForm";
import ImageGrid from './ImageGrid';
import Modal from './modal'
import '../assets/css/portfolio.css'
import { Container } from 'react-bootstrap';

function PortfolioPage() {

    const [selectedImg, setSelectedImg] = useState(null);

    return (

        <div className="ptb-150 bg-library">
            <Container>
                <ToolBar/>
                <Title/>
                <UploadForm />
                <ImageGrid setSelectedImg={setSelectedImg}/>
                { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
           
            </Container>

            
            

        </div>
    )

}
export default PortfolioPage

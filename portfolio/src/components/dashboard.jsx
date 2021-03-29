import React, { useState } from 'react';
import ToolBar from './toolbar'
import CreatePost from './createpost'
import Post from './post';
//CSS
import '../assets/css/dashboard.css'

//ReactStrap 
import { Container, Row, Col } from 'react-bootstrap';

function DashBoard() {



    return (
        <div className="bg-dark"> 
            <ToolBar/>
            <Container>
                <Row className="ptb-200">
                    <Col>
                        <CreatePost/>
                        <Post/>
                    </Col>
                    
                </Row>
               
            </Container>
            
        </div>
    )
}
export default DashBoard
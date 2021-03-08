import React from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import ToolBar from './toolbar'
import '../assets/css/home.css'
import { Link } from 'react-router-dom'
export default function HomePage() {


    return (
        <div className="bg-nature">
            <ToolBar/>
            <Container>
                <Row className="p-300">
                    <Col>

                        <Card className="text-white" bsPrefix="bg-transparent">

                            <Card.Title bsPrefix='ml-3'>
                                <h4>A Collection of Memories</h4>
                            </Card.Title>
                            <Card.Body>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                    pariatur. Excepteur sint occaecat cupidatat non proident, 
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Card.Body>
                        </Card>
                    
                 
                        <Button variant="light" href="/signup" className="m-3 w-50"> 
                            Start Here!
                        </Button>
            
                        
                    </Col>
                </Row>


          

                

               
            </Container>
        </div>
        
        
        
    );
    
} 


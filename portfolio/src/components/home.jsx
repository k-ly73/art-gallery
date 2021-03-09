import React from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import ToolBar from './toolbar'
import '../assets/css/home.css'
export default function HomePage() {


    return (
        <div className="bg-nature p-200">
            <ToolBar/>

            <Row className="p-200">
                <Card className="text-white text-center" bsPrefix="bg-transparent">

                    <Card.Title>
                        <h4 className="title">Collection of Memories</h4>
                    </Card.Title>
                    <Card.Body>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            
                        </p>
                    </Card.Body>
                    <Button variant="outline-light" href="/signup" className="m-3 w-50"> 
                        Start Here!
                    </Button>
                </Card>
            
            </Row>

        </div>
        
        
        
    );
    
} 


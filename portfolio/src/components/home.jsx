import React from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import '../assets/css/home.css'
import ToolBar from './toolbar';
//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

//Animation framer
import { motion } from 'framer-motion';

export default function HomePage() {



    return (
        <div className="bg-nature">
            <ToolBar/>
            <Container className="ptb-200">
                <Row className ="ptb-200">
                    <Col>
                        <Card className="text-white text-center" bsPrefix="bg-transparent">
                            <Card.Title>
                                <h4 className="title">Welcome To</h4>
                                <img src={require("../assets/images/PhotoBum-white.png")}
                                    style={{width: '300px'}} 
                                
                                />
                            </Card.Title>
                            <Card.Body>
                                <motion.div animate={{ }}>
                                    <FontAwesomeIcon 
                                        className ="fa-2x" 
                                        icon = {faAngleDown}
                                        
                                    />
                                </motion.div>

                            </Card.Body>
                        </Card>
                    </Col>

                
                </Row>                     
            </Container>
            <Container className="ptb-200">
                <Row className ="ptb-200" id='info'>
                    <Col>

                    </Col>
                    <Col>
                        <div className="text-white " bsPrefix="bg-transparent">
                            <h2>
                                Start your own Collection of Memories
                            </h2>
                            <p>   
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. Duis aute irure dolor in reprehenderit in voluptat
                                velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.  
                            </p>
                        </div>
                
                    </Col>

                </Row>
            </Container>
            <Container className="ptb-200">
                            
                <Row className ="ptb-200" id='info'>
                    <div className="text-white text-center" bsPrefix="bg-transparent">
                        <h2>
                            Ready To Start Your Collection?
                        </h2>
                        <p>   
                              
                        </p>
                    </div>
                
                </Row> 
            </Container>
            


        </div>
        
        
        
    );
    
} 


import React, { useState } from "react";
import { Button, Container, Row, Card, Alert } from 'react-bootstrap'
import ToolBar from "./toolbar";
import { useHistory } from 'react-router-dom'
import { useAuth } from '../assets/contexts/auth'
import './../assets/css/home.css';

import withStyles from '@material-ui/core/styles/withStyles';
// Material UI

// Icons


import Paper from '@material-ui/core'

export default function ProfilePage(){

    const [profilePic, setProfilePic] = useState(null);
    const handleProfileImage = (e) => {
        const image = event.target.files[0];
    }
    const[error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    
    async function handleLogout() {
        setError("");
        try {
            await logout();
            history.push('/signin');
        }
        catch {
            setError("Failed to log out");
        }


    }
    return (
        <div className="bg-water">
         
            <ToolBar />
            <Container>
                <Row className="ptb-150">
                    <Card 
                        className="text-center text-white"
                        bsPrefix="bg-transparent"
                    >
                        <Card.Body>
                            <h2 className="text-center mb-4"></h2>
                            {error && <Alert variant ="danger">{error}</Alert>}
                            <strong>Email: </strong> {currentUser.email}
                        </Card.Body>
                    </Card>
                   
                </Row>
                <Button variant ="danger" onClick={handleLogout}>Sign Out</Button>
                
            </Container>
            
        </div>
        
    )
}
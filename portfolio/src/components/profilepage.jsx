import React, { useState, useEffect } from "react";
import { Button, Container, Row, Card, Alert } from 'react-bootstrap'
import ToolBar from "./toolbar";

import { useHistory } from 'react-router-dom'
import { useAuth } from '../assets/contexts/auth'
import './../assets/css/home.css';

// Material UI
import withStyles from '@material-ui/core/styles/withStyles';

// Icons
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

export default function ProfilePage(){

    // const [profilePic, setProfilePic] = useState(null);
    // const handleProfileImage = (e) => {
    //     const image = event.target.files[0];
    // }
    const [error, setError] = useState("");

    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const userName = currentUser.email.replace("@gmail.com","");
    const photoUrl = ""

    async function handleLogout() {
        setError("")
        try {
            await logout();
            history.push("/signin");
        } catch {
            setError("Failed to log out");        }
    }
    return (
        <div className="gradient-bg ptb-200 text-white">
         
            <ToolBar />
            <Container 
                className="d-flex align-items-center justify-content-center"
            >   
                <Row>
                    <p>
                        {userName}
                      
                    </p>
                </Row>

                
            </Container>
            
        </div>
        
    )
}
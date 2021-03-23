import React, { useState, useEffect } from "react";
import { Button, Container, Row, Card, Alert } from 'react-bootstrap'
import ToolBar from "./toolbar";
import { porjectFirestore } from '../assets/firebase/firebase';

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

    async function handleLogout() {
        setError("")
        try {
            await logout();
            history.push("/signin");
        } catch {
            setError("Failed to log out")
;        }
    }
    return (
        <div className="bg-water">
         
            <ToolBar />
            <Container 
                className="ptb-200"
            >         
                <Button 
                    variant="btn btn-danger"
                    onClick={handleLogout}

                    >
                        Sign Out
                    
                    </Button>

                
            </Container>
            
        </div>
        
    )
}
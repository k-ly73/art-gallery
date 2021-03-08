import React, { useContext } from "react";
import app from "../assets/firebase/firebase";
import { Button, Container, Row } from 'react-bootstrap'
import ToolBar from "./toolbar";
import './../assets/css/home.css';
const ProfilePage = () => {

    return (
        <div>
            <div className="container">
                <ToolBar />
                <Container>
                    <Row style ={{marginTop:'400px'}}>
                        <Button variant ="danger" onClick ={() => {app.auth().signOut()}}>Sign Out</Button>
                    </Row>
                 
                </Container>
               
            </div>
        </div>
    )
}
export default ProfilePage
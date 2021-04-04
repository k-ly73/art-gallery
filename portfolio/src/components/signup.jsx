import React, { useRef, useState } from 'react'
import { Form, Button, Card, Container, Alert, Col } from "react-bootstrap"
import { useAuth } from "../assets/contexts/auth"
import { Link, useHistory } from "react-router-dom"
import ToolBar from './toolbar'
import '../assets/css/form.css'

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup } = useAuth();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();


        try {
            setSuccess("Success! Account created, now you can log in");
            setError("")
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
        } 
        catch {
            setSuccess("");
            setError("Failed to create an account");
        }

        setLoading(false);
    }
    return (
        <div className ="bg-nature">
            <ToolBar/>
            <Container 
                className="d-flex align-items-center justify-content-center"
                style={{minHeight: "100vh"}}
            >
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Create an Account</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="w-100" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                        <div className="text-center w-100 mt-2">
                            Already have an account? Click <Link to="/signin">here</Link> to Login
                        </div>
                    </Card.Body>
                    
                </Card>
        </Container>
        </div>
    )
}

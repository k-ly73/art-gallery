import React, { useRef, useState } from 'react'
import { Form, Button, Card, Container, Alert, Row, Col } from "react-bootstrap"
import { useAuth } from "../assets/contexts/auth.jsx"
import { Link, useHistory } from "react-router-dom"

import '../assets/css/form.css'

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();


        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } 
        catch {
            setError("Failed to Sign In");
        }

        setLoading(false);
    }
    return (
        <div className ="bg-nature">
            <Container 
                className="d-flex align-items-center justify-content-center"
                style={{minHeight: "100vh"}}
            >

                <Card className="transparent">
                    <Card.Body>
                        <h2 className="text-center mb-4">Login</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Button disabled={loading} variant="success" className="w-100" type="submit">
                                Login
                            </Button>
                        </Form>
                        <div className="text-center w-100 mt-2">
                            Don't have an account? Click <Link to="/signup">here</Link> to Sign Up
                        </div>
                    </Card.Body>
                    
                </Card>

            </Container>
        </div>
    )
}

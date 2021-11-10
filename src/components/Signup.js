import React, { useRef, useState } from 'react'
import { Form, Button, Card, Container } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import app from '../firebase'
import { v4 as uuidv4 } from 'uuid';

export default function Signup() {    
    const emailRef = useRef()
    const passwordRef = useRef()
    
    const [politicians, setPolis] = useState([]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [party, setParty] = useState("");
    const [position, setPosition] = useState("");
    const [img, setImg] = useState("")

    const ref = app.firestore().collection("politicians");

    function addPoli(newPoli) {
        ref
            .doc(newPoli.id)
            .set(newPoli)
            .catch((err) => {
                console.error(err);
            })
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <Container 
            className="d-flex align-items-center justify-content-center"
        >
            <div className="w-50" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Register as a Politician!</h2>
                        <h6>Input your information below to be displayed in the VoteSource Politician Database!</h6>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" onChange={(e) => setName(e.target.value)} required />
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group>
                                <Form.Label>Position</Form.Label>
                                <Form.Control type="text" onChange={(e) => setPosition(e.target.value)} required />
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group>
                                <Form.Label>Party</Form.Label>
                                <Form.Control type="text" onChange={(e) => setParty(e.target.value)} required />
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group>
                                <Form.Label>Profile Photo</Form.Label>
                                <Form.Control type="text" onChange={(e) => setImg(e.target.value)} required />
                            </Form.Group>
                        </Form>
                        <Link to="/polis">
                            <Button type="submit" onClick={() => addPoli({ name, party, position, img, id: uuidv4() })}>Sign Up</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )   
}

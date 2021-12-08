import React, { useRef, useState } from 'react'
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import app from '../firebase'
import { v4 as uuidv4 } from 'uuid';
import nassau from './images/nassau.png'

export default function Signup() {    
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const history = useHistory()

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
                        <h2 className="text-center mb-4">Nassau Politician Registration</h2>
                        <h6>Input your information below to be displayed in the VoteSource Politician Database!</h6>
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
                        <Link to="/polis"><Button diabled={loading} type="submit" onClick={() => addPoli({ name, party, position, img, id: uuidv4() })}>Register Data to Database</Button></Link>                  
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )   
}

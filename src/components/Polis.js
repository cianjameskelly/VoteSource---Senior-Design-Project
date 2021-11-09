import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, FormLabel, Modal, Row } from 'react-bootstrap';
import app from '../firebase'
import { BsChevronRight } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
//import { FaRepublican, FaDemocrat } from 'react-icons/fa'

function Polis() {
    const [politicians, setPolis] = useState([]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [party, setParty] = useState("");
    const [position, setPosition] = useState("");
    const [img, setImg] = useState("")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ref = app.firestore().collection("politicians");
   
    function getPolis() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setPolis(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getPolis();
    }, []);

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

/*
    function party_icon() {
        if (politician.party='Democrat') {
          return <FaDemocrat />;
        } else {
        return <FaRepublican />;
      }
    }
*/
    return (
        <div min-width= {100}>
            <h1>Nassau County Politicians</h1>
            <div className="inputPoli">
                <h4>Are you running? Add your information to VoteSource below!</h4>
                <input type='text' onChange={(e) => setName(e.target.value)} />
                <input type='text' onChange={(e) => setParty(e.target.value)} />
                <input type='text' onChange={(e) => setPosition(e.target.value)} />
                <input type='file' onChange={(e) => setImg(e.target.value)} />
                <button onClick={() => addPoli({ name, party, position, img, id: uuidv4() })}>
                    Submit
                </button>
            </div>
            <Row xs={2} md={5} lg={8}>
                {politicians.map((politician) => (
                    <Col>
                        <Card 
                            style={{ width: '15rem' }}
                            key={politician.id}
                            >
                            <Card.Img src={politician.img} />
                            <Card.Body>
                                <Card.Title>{politician.name}</Card.Title>
                                <Card.Text>
                                    <h6>{politician.position}</h6>
                                    <h6>{politician.party}</h6>
                                    {/*<h6>{this.party_icon(politician.party)}</h6>*/}
                                    <Link to="/poliprofile">
                                        <Button
                                            variant='primary'
                                            onClick={handleShow}
                                        >
                                            <BsChevronRight></BsChevronRight>
                                        </Button>
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Polis;

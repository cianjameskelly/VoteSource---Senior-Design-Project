import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, FormLabel, Modal, Row } from 'react-bootstrap';
import app from '../firebase'
import { BsChevronRight } from 'react-icons/bs'
//import { FaRepublican, FaDemocrat } from 'react-icons/fa'

function Suffolk() {
    const [suffolk, setPolis] = useState([]);
    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ref = app.firestore().collection("suffolk");
   
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
            <h1>Suffolk County Politicians</h1>
            <Card>
                <Card.Title>
                    <Form
                        
                    >
                        <FormLabel>Search</FormLabel>
                    </Form>
                </Card.Title>
            </Card>
            <Row xs={2} md={5} lg={8}>
                {suffolk.map((politician) => (
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
                                    <Button
                                        variant='primary'
                                        onClick={handleShow}
                                    >
                                        <BsChevronRight></BsChevronRight>
                                    </Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header>
                                            <Modal.Title>{politician.name}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h6>Position: {politician.position}</h6>
                                            <h6>Party: {politician.party}</h6>
                                            <p>Webscraping for politician information is supposed to occur here</p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Suffolk;

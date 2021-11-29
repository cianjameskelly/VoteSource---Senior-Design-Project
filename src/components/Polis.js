import React, { useEffect, useState } from 'react'
import { Button, Card, Col,Row } from 'react-bootstrap';
import app from '../firebase'
import { BsChevronRight } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
//import { FaRepublican, FaDemocrat } from 'react-icons/fa'

function Polis() {
    const [politicians, setPolis] = useState([]);
    const [allPoliticians, setAllPolis] = useState([]);
    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);
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
            setAllPolis(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getPolis();
        setPolis();
        setAllPolis();
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
    const filterCards = event => {
        const value = event.target.value.toLowerCase();
        const filteredPolis = allPoliticians.filter(politician => (`${politician.name} ${politician.position} ${politician.party}`.toLowerCase().includes(value)));
        setPolis(filteredPolis);
    }

    return (
        <div className="Polis">
            <div style={{ margin: '2rem' }}>
                <h1>Nassau County Candidates</h1>
                <input className="search-box" placeholder="Search" onInput={filterCards}/>
            </div>
            <div min-width= {100}>
                <Row xs={2} md={5} lg={8}>
                    {politicians.map((politician) => (
                        <Col>
                            <Card 
                                style={{ margin: '2rem 2rem 2rem 0', padding: '1.5rem', width: '15rem', height: '30rem' }}
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
        </div>
    );
}

export default Polis;

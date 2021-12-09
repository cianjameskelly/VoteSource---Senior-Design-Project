import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import app from '../firebase'

function Suffolk() {
    const [suffolk, setPolis] = useState([]);
    const [allPoliticians, setAllPolis] = useState([]);
    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);
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

    const filterCards = event => {
        const value = event.target.value.toLowerCase();
        const filteredPolis = allPoliticians.filter(politician => (`${politician.name} ${politician.position} ${politician.party}`.toLowerCase().includes(value)));
        setPolis(filteredPolis);
    }

    return (
        <div className="Suffolk">
            <div style={{ margin: '2rem' }}>
                <h1>Suffolk County Candidates</h1>
                <input className="search-box" placeholder="Search" onInput={filterCards}/>
            </div>
            <div min-width= {100}>
                <Row xs={1} md={5} lg={8}>
                    {suffolk.map((politician) => (
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
                                        <a href={politician.site1} rel="noreferrer">
                                            More Info
                                        </a>
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

export default Suffolk;

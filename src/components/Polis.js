import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import app from '../firebase'
//import { SearchState, IntegratedFiltering } from '@devexpress/dx-react-grid';
import { BsChevronRight } from 'react-icons/bs'
import moreInfo from './moreInfo'

function Polis() {
    const [politicians, setPolis] = useState([]);
    const [loading, setLoading] = useState(false);

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

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div min-width= {100}>          
            <h1>Politicians</h1>
            {/*
            <SearchState defaultValue='Type a Politician name, party, position, etc...' />
            <IntegratedFiltering />
            */}
            <Row xs={2} md={5} lg={8}>
                {politicians.map((politician) => (
                    <Col>
                        <Card 
                            style={{ width: '15rem' }}
                            key={politician.id}
                            >
                            <Card.Img variant='top' src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=' />
                            <Card.Body>
                                <Card.Title>{politician.name}</Card.Title>
                                <Card.Text>
                                    <h6>{politician.position}</h6>
                                    <h6>{politician.party}</h6>
                                </Card.Text>
                                <Button 
                                >
                                    <BsChevronRight></BsChevronRight>
                                </Button>
                                <moreInfo trigger={true}>
                                    
                                </moreInfo>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Polis;

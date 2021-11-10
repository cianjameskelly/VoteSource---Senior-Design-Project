import React from "react";
import Polis from "./Polis";
import { Card } from 'react-bootstrap';

function PoliProfile() {
     return (
        <Card 
        style={{ width: '15rem' }}
        >
        <Card.Img src={"http://static1.squarespace.com/static/59973af5f14aa1ab06cba333/5a7a700924a69401d14e4c65/5ba1385c0e2e726e090359be/1537292534623/laura+curran.color+jpeg.jpeg?format=1500w"} />
        <Card.Body>
            <Card.Title>{"Laura Curran"}</Card.Title>
            <Card.Text>
                <h5>{"County Executive"}</h5>
                <h5>{"Democrat"}</h5>
                <a href="https://www.curranfornassau.com/home/" rel="noreferrer">
                  Personal Website
                </a>
            </Card.Text>
        </Card.Body>
    </Card>
     );
 }

 export default PoliProfile;
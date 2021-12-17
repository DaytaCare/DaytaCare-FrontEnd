import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import './Registration.css'
// import { Link } from 'react-router-dom';
//import DaycareForm from './DaycareForm';
//import ParentForm from './ParentForm';

export default function Registration() {

    return (
        <div className="signupOptions">
            <Container className="register">
            <Card className="signupCard" >
              <Card.Body>
                <Card.Title>Register as a Parent</Card.Title>
            <Button className="registerButton" as="a" href="/ParentForm">Parent</Button>
            </Card.Body>
            </Card>
            <Card className="signupCard" >
              <Card.Body>
                <Card.Title>Register as a Daycare Owner</Card.Title>
            <Button className="registerButton" as="a" href="/DaycareForm">Daycare</Button>
            </Card.Body>
            </Card>
            </Container>  
        </div>


    )
}

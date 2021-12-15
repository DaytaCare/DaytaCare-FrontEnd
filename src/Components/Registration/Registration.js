import React from 'react';
import { Card, Nav, Button } from 'react-bootstrap';

export default function Registration() {

    return (
        <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="/ParentForm">Parent Registration</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/DaycareForm">Owner Registration</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>Registration Form</Card.Title>
                <Card.Text>
                    If you are a parent and wanting to search for available daycares, please use the Parent Registration
                    Daycare owners, please use the Owner Registration to register and add your daycares.
                </Card.Text>
                <Button variant="primary">I don't think we need this button unless to cancel/close form</Button>
            </Card.Body>
        </Card>
    )
}

import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import DaycareForm from './DaycareForm';
//import ParentForm from './ParentForm';

export default function Registration() {

    return (
        <Card>
            <Card.Header>
                <Nav variant="pills" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/ParentForm">Parent</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/DaycareForm">Daycare Provider</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
        </Card>
    )
}

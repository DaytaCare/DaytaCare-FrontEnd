import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function DaycareRegister() {

    function handleDaycareRegisterSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const { email, username, password } = form.elements;

        const daycareRegData = {
            email: email.value,
            username: username.value,
            password: password.value,
        };
        console.log(daycareRegData);
        form.reset();
    }

    return (
        <>
        <Form onSubmit={handleDaycareRegisterSubmit} title="Owner Registration Form">
        <Row>
                <Col xs="auto">
            <Form.Group className="mb-3" controlId="form.email">
                <Form.Label>Email:</Form.Label>
                <Form.Control name="email" type="email" placeholder="jane@example.com"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.username">
                <Form.Label>Username:</Form.Label>
                <Form.Control name="username" type="username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.password">
                <Form.Label>Password:</Form.Label>
                <Form.Control name="password" type="password" />
                <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers, and
                            must not contain spaces, special characters, or emoji.
                        </Form.Text>
            </Form.Group>

            <Button type="submit">Register</Button>
            </Col>
            </Row>
        </Form>
        </>
    )
}
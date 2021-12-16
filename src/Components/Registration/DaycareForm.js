import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Registration.css'

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/Users'

export default function ParentRegister() {

    async function handleDaycareRegisterSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const { email, username, password } = form.elements;

        const daycareRegData = {
            email: email.value,
            username: username.value,
            password: password.value,
        };
        console.log("Submitting....", daycareRegData);


        const result = await fetch(`${daytaCareApi}/DaycareRegister`, {
            method: 'post',
            body: JSON.stringify(daycareRegData),
            headers: {
                'Content-Type': 'application/json',
            },

        })

        console.log(result);
        form.reset();
        //onSave();
    }

    return (
        <div className="centerD">
        <Form onSubmit={handleDaycareRegisterSubmit} title="Owner Registration Form" className="formDP">
            <Row>
                <Col xs="auto">
                    <Form.Group className="mb-3" controlId="form.email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control name="email" type="email" placeholder="jane@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form.username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control name="username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form.password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control name="password" type="password" />
                    </Form.Group>

                    <Button type="submit">Register</Button>
                </Col>
            </Row>
        </Form>
        </div>
    )
}
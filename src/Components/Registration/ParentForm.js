import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Registration.css'

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/Users'

export default function ParentRegister() {

    async function handleParentRegisterSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const { email, username, password, firstName, lastName, phone, familyBio } = form.elements;

        const parentRegData = {
            email: email.value,
            username: username.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value,
            phone: phone.value,
            familyBio: familyBio.value,
        };
        console.log("Submitting....", parentRegData);


        const result = await fetch(`${daytaCareApi}/ParentRegister`, {
            method: 'post',
            body: JSON.stringify(parentRegData),
            headers: {
                'Content-Type': 'application/json',
            },

        })

        console.log(result);
        form.reset();
        //onSave();
    }

    return (
        <div className="centerP">
            <Form onSubmit={handleParentRegisterSubmit} title="Parent Registration Form" className="formDP">
                <Row>
                    <Col xs="auto">
                        <Form.Group className="mb-3" controlId="form.email">
                            <legend>Parent Registration Form</legend>
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

                        <Form.Group className="mb-3" controlId="form.firstName">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control name="firstName" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="form.lastName">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control name="lastName" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="form.phone">
                            <Form.Label>Phone Number:</Form.Label>
                            <Form.Control name="phone" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="form.familyBio">
                            <Form.Label>Family Bio (Tell us about your daycare needs):</Form.Label>
                            <Form.Control name="familyBio" type="textarea" />
                        </Form.Group>

                        <Form.Group>
                            <Button variant="primary" type="submit" size="lg">Register</Button>
                        </Form.Group>

                        <Form.Group>
                            <Button variant="secondary" href="/">Return Home</Button>{' '}
                            <Button variant="info" href="/Registration">Back</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
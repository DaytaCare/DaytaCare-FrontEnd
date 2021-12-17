import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import './ParentForm.css'
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
        <div className="form-section">
            <Form onSubmit={handleParentRegisterSubmit} title="Parent Registration" className="parent-signup">
                <legend>Parent Registration</legend>
                <Row xs={2}>
                    <Form.Group className="mb-3" controlId="form.username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control name="username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="form.password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control name="password" type="password" />
                    </Form.Group>
                </Row>
                <Row xs={2}>
                    <Form.Group className="mb-3" controlId="form.firstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control name="firstName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="form.lastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control name="lastName" />
                    </Form.Group>
                </Row>
                <Row xs={2}>
                    <Form.Group className="mb-3" controlId="form.email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control name="email" type="email" placeholder="jane@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="form.phone">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control name="phone" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="form.familyBio">
                    <Form.Label>Family Bio (Tell us about your daycare needs):</Form.Label>
                    <Form.Control name="familyBio" as="textarea" />
                </Form.Group>
                <Form.Group>
                    <Button href="/Registration" className="back-button">Back</Button>
                    <Button type="submit">Register</Button>
                </Form.Group>
            </Form>
        </div>
    )
}
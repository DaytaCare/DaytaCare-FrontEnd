import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function DaycareRegister() {

    function handleDaycareRegisterSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const { email, username, password } = form.elements;

        const daycareRegData = {
            email: email.value,
            username: username.value,
            password: password.value,
            role: "Daycare Provider"
        };
        console.log(daycareRegData);
        form.reset();
    }

    return (
        <Form onSubmit={handleDaycareRegisterSubmit} title="Owner Registration Form">
            <Form.Group className="mb-3" controlId="form.email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="jane@example.com" value="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.username">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="username" value="username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.password">
                <Form.Label>Password:</Form.Label>
                <Form.Control name="password" type="password" value="password" />
            </Form.Group>

            <Button type="submit">Register</Button>
        </Form>
    )
}
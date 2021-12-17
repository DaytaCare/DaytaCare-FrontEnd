import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './DaycareForm.css';
import './Registration.css';
import { useHistory } from 'react-router-dom';

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/Users'

export default function DaycareRegister() {

    const history = useHistory();

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
        history.push("/Login")
    }


    return (
        <div className="form-section" title="Daycare Registration">
            <Form onSubmit={handleDaycareRegisterSubmit} className="daycare-signup">
                <legend>Daycare Registration</legend>
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
                <Form.Group className="form-buttons">
                    <Button href="/Registration" className="back-button">Back</Button>
                    <Button type="submit" redirect="/Login">Register</Button>
                </Form.Group>
            </Form>
        </div>
    )
}
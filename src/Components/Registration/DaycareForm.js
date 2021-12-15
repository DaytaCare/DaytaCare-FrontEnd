import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function DaycareRegister() {

    function handleDaycareRegisterSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const { email, username, password} = form.elements;

        const daycareRegData = {
            email:  email.value,
            username:  username.value,
            password:  password.value,
        };
        console.log(daycareRegData);
        form.reset();
    }

    return (
        <Form onSubmit = { handleDaycareRegisterSubmit }>
            <Form.Label>Email:  <input name="email" type="email" /></Form.Label>
        <Form.Label>Username:  <input name="username" /></Form.Label>
        <Form.Label> Password:  <input name="password" type="password"/></Form.Label>
        <Button type="submit">Register</Button>
        </Form>
    )
}
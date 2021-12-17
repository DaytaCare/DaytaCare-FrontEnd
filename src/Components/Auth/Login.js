import './Login.css';
import useAuth from '../Hooks/useAuth';
import { Redirect } from 'react-router-dom';
import { Form, Button, FloatingLabel } from 'react-bootstrap';

export default function Login() {
    const { login, user } = useAuth();

    function handleLoginSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const { username, password } = form.elements;

        const loginData = {
            username: username.value,
            password: password.value,
        };
        console.log(loginData);

        login(loginData);
        form.reset();
    }

    if (user) {
        return <Redirect to="/" />
    }

    return (
        <>
            <Form className="login-form" onSubmit={handleLoginSubmit}>
                <Form.Group>
                    <FloatingLabel>
                        <Form.Control type="text" placeholder="Username" />
                    </FloatingLabel>
                    <label>Username:  <input name="username" /></label>
                    <br />
                    <label> Password:  <input name="password" type="password" /></label>
                    <br />
                    <Button type="submit" className="login-button">Log In</Button>
                </Form.Group>
            </Form>
        </>
    )
}
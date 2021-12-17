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
                <h4 className="form-title">Log In to Continue</h4>
                <Form.Group>
                    <FloatingLabel controlId="floatingInput" name="Username" className="loginUsername">
                        <Form.Control type="text" name="username" placeholder="Username" />
                    </FloatingLabel>
                    <br />
                    <FloatingLabel controlId="floatingInput" label="Password" className="loginPassword" input="password">
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button type="submit" className="login-button">Log In</Button>
                </Form.Group>
            </Form>
        </>
    )
}
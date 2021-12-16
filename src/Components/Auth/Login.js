import './Login.css';
import useAuth from '../Hooks/useAuth';
import { Redirect } from 'react-router-dom';

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
        <div>
            <form className="login-form" onSubmit={handleLoginSubmit}>
                <label>Username:  <input name="username" /></label>
                <br />
                <label> Password:  <input name="password" type="password" /></label>
                <br />
                <button type="submit" className="login-button">Log In</button>
            </form>
        </div>
    )
}
import useAuth from '../Hooks/useAuth';

export default function Login() {
    const { login } = useAuth();

    function handleLoginSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const { username, password} = form.elements;

        const loginData = {
            username:  username.value,
            password:  password.value,
        };
        console.log(loginData);

        login(loginData);
        form.rest();
    }

    return (
        <form onSubmit = { handleLoginSubmit }>
        <label>Username:  <input name="username" /></label>
        <label> Password:  <input name="password" type="password"/></label>
        <button type="submit">Log In</button>
        </form>
    )
}
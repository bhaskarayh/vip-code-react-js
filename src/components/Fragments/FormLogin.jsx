import InputForm from '../Elements/Input';
import Button from '../Elements/Button';
import { useState, useRef, useEffect } from 'react';
import { login } from '../../services/auth.service';

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        // console.log('login');
        // Simpen data ke local storage
        // localStorage.setItem('email', event.target.email.value);
        // localStorage.setItem('password', event.target.password.value);
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);

        // Login Services API
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };
        login(data, (status, res) => {
            if (status) {
                // console.log(res.data.token);
                localStorage.setItem('token', res.data.token);
                setLoginFailed('');
                /* Redirect ke Halaman Product */
                window.location.href = '/products';
            } else {
                setLoginFailed(res.response.data);
                // console.log(res.response.data);
            }
        });

        /* Redirect ke Halaman Product */
        // window.location.href = '/products';
    };

    const usernameRef = useRef(null);

    useEffect(() => {
        console.log('focus email');
        usernameRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleLogin}>
            <div className="mb-6">
                <InputForm
                    label="Username"
                    type="text"
                    placeholder="John Doe"
                    name="username"
                    ref={usernameRef}
                />
            </div>
            <div className="mb-6">
                <InputForm
                    label="Password"
                    placeholder="******"
                    name="password"
                    type="password"
                />
            </div>
            <Button className="bg-blue-600 w-full" type="submit">
                Login
            </Button>
            {loginFailed && (
                <p className="text-red-500 mt-5 text-center">{loginFailed}</p>
            )}
        </form>
    );
};
export default FormLogin;

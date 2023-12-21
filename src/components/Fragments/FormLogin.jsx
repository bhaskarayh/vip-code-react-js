import InputForm from '../Elements/Input';
import Button from '../Elements/Button';
import { useRef, useEffect } from 'react';

const FormLogin = () => {
    const handleLogin = event => {
        event.preventDefault();
        console.log('login');
        // Simpen data ke local storage
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);

        /* Redirect ke Halaman Product */
        window.location.href = '/products';
    };

    const emailRef = useRef(null);

    useEffect(() => {
        console.log('focus email');
        emailRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleLogin}>
            <div className="mb-6">
                <InputForm
                    label="E-mail"
                    type="email"
                    placeholder="example@default.com"
                    name="email"
                    ref={emailRef}
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
        </form>
    );
};
export default FormLogin;

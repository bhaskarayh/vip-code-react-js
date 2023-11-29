import InputForm from '../Elements/Input';
import Button from '../Elements/Button';

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

    return (
        <form onSubmit={handleLogin}>
            <div className="mb-6">
                <InputForm
                    label="E-mail"
                    type="email"
                    placeholder="example@default.com"
                    name="email"
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

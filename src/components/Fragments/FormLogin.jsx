import InputForm from '../Elements/Input';
import Button from '../Elements/Button';

const FormLogin = () => {
  return (
    <form action="">
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
      <Button className="bg-blue-600 w-full">Login</Button>
    </form>
  );
};
export default FormLogin;

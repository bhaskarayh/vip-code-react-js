import InputForm from '../Elements/Input';
import Button from '../Elements/Button';

const FormRegister = () => {
  return (
    <form action="">
      <div className="mb-6">
        <InputForm
          label="Full Name"
          type="text"
          placeholder="insert your name here..."
          name="fullName"
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
      <div className="mb-6">
        <InputForm
          label="Confirm Password"
          placeholder="******"
          name="password"
          type="confirmPassword"
        />
      </div>
      <Button className="bg-blue-600 w-full">Register</Button>
    </form>
  );
};
export default FormRegister;

import { forwardRef } from 'react';
import Input from '../Input/Input';
import Label from '../Input/Label';

/* const InputForm = props => {
    const { label, name, placeholder, type, ref } = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                ref={ref}
            />
        </div>
    );
}; */

// Diganti karena menggunakan ref
/* forwardRef lets your component expose a DOM node to parent component with a ref. */
const InputForm = forwardRef((props, ref) => {
    const { label, name, placeholder, type } = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                ref={ref}
            />
        </div>
    );
});

export default InputForm;

import { Fragment } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button';
import Counter from '../components/Fragments/Counter';

const products = [
    {
        id: 1,
        name: 'Sepatu Baru',
        price: 'Rp 1.000.000',
        image: '/images/shoes.jpg',
        desciption:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi quaerat aliquam optio eos laborum expedita est deserunt quas repellat.',
    },
    {
        id: 2,
        name: 'Sepatu Lama',
        price: 'Rp 500.000',
        image: '/images/shoes.jpg',
        desciption:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi.',
    },
];

// Get from Local Storage
const email = localStorage.getItem('email');

const ProducsPage = () => {
    // console.log({ CardProduct });
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    };

    return (
        <Fragment>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 py-8">
                {email}
                <Button className="ml-5 bg-red-600" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="flex flex-wrap justify-center py-5 gap-2.5">
                {products.map(product => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.name}>
                            {product.desciption}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
            <div className="flex justify-center mb-10">
                <Counter />
            </div>
        </Fragment>
    );
};

/* const NavigationBar = () => {
    return <div></div>;
}; */

export default ProducsPage;

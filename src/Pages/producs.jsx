import { Fragment, useState, useEffect, useRef } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button';
import { getProducts } from '../services/product.service';

/* const products = [
    {
        id: 1,
        name: 'Sepatu Baru',
        price: 1000000,
        image: '/images/shoes.jpg',
        desciption:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi quaerat aliquam optio eos laborum expedita est deserunt quas repellat.',
    },
    {
        id: 2,
        name: 'Sepatu Lama',
        price: 500000,
        image: '/images/shoes.jpg',
        desciption:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi.',
    },
    {
        id: 3,
        name: 'Sepatu Lama',
        price: 2000000,
        image: '/images/shoes.jpg',
        desciption:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi.',
    },
]; */

// Get from Local Storage
const email = localStorage.getItem('email');

const ProducsPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);

    // ComponentDidMount
    useEffect(
        () => {
            setCart(JSON.parse(localStorage.getItem('cart')) || []);
        },
        // ComponentDidUpdate
        // Dependency harus diisi walaupun kosong
        []
    );

    // Use Effect API
    useEffect(() => {
        getProducts(data => {
            // console.log(data);
            setProducts(data);
        });
    }, []);

    // ComponentDidMount
    useEffect(
        () => {
            if (products.length > 0 && cart.length > 0) {
                const sum = cart.reduce((acc, item) => {
                    const product = products.find(
                        product => product.id === item.id
                    );

                    return acc + product.price * item.qty;
                }, 0);
                setTotalPrice(sum);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        },
        // ComponentDidUpdate
        // Dependency harus diisi walaupun kosong
        [cart, products]
    );

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    };

    const handleAddToCart = id => {
        /*  setCart([
            ...cart,
            {
                id,
                qty: 1,
            },
        ]); */
        if (cart.find(item => item.id === id)) {
            // Add Quantity
            setCart(
                cart.map(item =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
            );
        } else {
            setCart([
                ...cart,
                {
                    id,
                    qty: 1,
                },
            ]);
        }
    };

    /* UseRef - Tidak akan di render jadi butuh refresh biar di render ke depan, tetapi data tetap disimpan*/
    const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);

    const handleAddToCartRef = id => {
        cartRef.current = [...cartRef.current, { id, qty: 1 }];
        localStorage.setItem('cart', JSON.stringify(cartRef.current));
    };

    const totalPriceRef = useRef(null);

    // console.log(totalPriceRef);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = 'table-row';
        } else {
            totalPriceRef.current.style.display = 'none';
        }
    }, [cart]);

    return (
        <Fragment>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 py-8">
                {email}
                {email !== null && (
                    <Button className="ml-5 bg-red-600" onClick={handleLogout}>
                        Logout
                    </Button>
                )}
            </div>
            <div className="flex justify-center py-5 ">
                <div className="w-4/6 flex flex-wrap gap-3 justify-center">
                    {products.length > 0 &&
                        products.map(product => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} />
                                <CardProduct.Body name={product.title}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer
                                    price={product.price}
                                    id={product.id}
                                    handleAddToCart={
                                        () => handleAddToCart(product.id)
                                        // handleAddToCartRef(product.id)
                                    }
                                />
                            </CardProduct>
                        ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold ml-5 text-blue-600">
                        Cart
                    </h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log(cart)} */}
                            {products.length > 0 &&
                                cart.map(item => {
                                    // {console.log(cartRef)}
                                    // {cartRef.current.map(item => {
                                    const product = products.find(
                                        product => product.id === item.id
                                    );

                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                {product.title.substring(0, 10)}
                                                ...
                                            </td>
                                            <td>
                                                {product.price.toLocaleString(
                                                    'us-US',
                                                    {
                                                        style: 'currency',
                                                        currency: 'USD',
                                                    }
                                                )}
                                            </td>
                                            <td>{item.qty}</td>
                                            <td>
                                                {(
                                                    item.qty * product.price
                                                ).toLocaleString('us-US', {
                                                    style: 'currency',
                                                    currency: 'USD',
                                                })}
                                            </td>
                                        </tr>
                                    );
                                })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3}>
                                    <b>Total Price</b>
                                </td>
                                <td>
                                    <b>
                                        {totalPrice.toLocaleString('us-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        })}
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

/* const NavigationBar = () => {
    return <div></div>;
}; */

export default ProducsPage;

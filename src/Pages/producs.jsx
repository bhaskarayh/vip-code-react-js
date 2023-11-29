import CardProduct from '../components/Fragments/CardProduct';

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

const ProducsPage = () => {
    // console.log({ CardProduct });
    return (
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
    );
};

export default ProducsPage;

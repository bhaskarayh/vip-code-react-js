import CardProduct from '../components/Fragments/CardProduct';

const ProducsPage = () => {
    // console.log({ CardProduct });
    return (
        <div className="flex justify-center py-5 gap-2.5">
            <CardProduct>
                <CardProduct.Header image="images/shoes.jpg" />
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio nisi quaerat aliquam optio eos laborum expedita
                    est deserunt quas repellat.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 1.000.000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="images/shoes.jpg" />
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio nisi quaerat aliquam optio eos laborum expedita
                    est deserunt quas repellat.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 1.000.000" />
            </CardProduct>
        </div>
    );
};

export default ProducsPage;

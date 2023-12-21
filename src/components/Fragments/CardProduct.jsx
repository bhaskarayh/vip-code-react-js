import Button from '../Elements/Button';

const CardProduct = props => {
    const { children } = props;
    return (
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
            {children}
        </div>
    );
};

const Header = props => {
    const { image } = props;
    return (
        <a href="#">
            <img src={image} alt="product" className="p-5 rounded-t-lg" />
        </a>
    );
};

const Body = props => {
    const { children, name } = props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl text-white font-semibold tracking-tight mb-3">
                    {name}
                </h5>
                <p className="text-sm text-white">{children}</p>
            </a>
        </div>
    );
};

const Footer = props => {
    const { price, handleAddToCart, id } = props;

    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-lg font-bold text-white">
                {price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                })}
            </span>
            <Button
                className="bg-blue-600 text-md"
                onClick={() => handleAddToCart(id)}
            >
                Add to Card
            </Button>
        </div>
    );
};

// Return Object dari Function masing masing komponen
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

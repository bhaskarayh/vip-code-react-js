import Button from '../Elements/Button';

const CardProduct = props => {
    const { children } = props;
    return (
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow">
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
    const { children, title } = props;
    return (
        <div className="px-5 pb-5">
            <a href="">
                <h5 className="text-xl text-white font-semibold tracking-tight">
                    {title}
                </h5>
                <p className="text-m text-white">{children}</p>
            </a>
        </div>
    );
};

const Footer = props => {
    const { price } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">{price}</span>
            <Button className="bg-blue-600">Add to Card</Button>
        </div>
    );
};

// Return Object dari Function masing masing komponen
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

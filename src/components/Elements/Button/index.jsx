const Button = props => {
    const {
        children = '...',
        className = 'bg-black',
        onClick = () => {},
        type = 'button',
    } = props;

    return (
        <button
            className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
            type={type}
            /* onClick={() => {
                // console.log('anda mengklik tombol ini');
                onCLick;
            }} */
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
};

export default Button;

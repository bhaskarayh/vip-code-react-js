import { Link } from 'react-router-dom';

const AuthLayout = props => {
    const { children, title, type } = props;

    return (
        <div className="flex justify-center  min-h-screen items-center">
            <div className="w-full max-w-sm border border-slate-200 py-5 px-10 shadow-lg rounded-lg ">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">
                    {title}
                </h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, Please enter your details
                </p>
                {children}
                <Navigation type={type} />
                {/* <p className="text-sm mt-5 text-center">
            {type === 'login' ? "Don't have an account? " : 'Have an account? '}
            {type === 'login' && (
                <Link to="/register" className="font-bold text-blue-600">
                Register
                </Link>
            )}
            {type === 'register' && (
                <Link to="/login" className="font-bold text-blue-600">
                Login
                </Link>
            )}
            {type === 'logout' && (
                <Link to="/home" className="font-bold text-blue-600">
                Login
                </Link>
            )}
            </p> */}
            </div>
        </div>
    );
};

const Navigation = ({ type }) => {
    if (type === 'login') {
        return (
            <p className="text-sm mt-5 text-center">
                Don&apos;t have an account?{' '}
                <Link to="/register" className="font-bold text-blue-600">
                    {/* Pindah halaman tanpa reload halaman dengan client side routing */}
                    Register
                </Link>
            </p>
        );
    } else {
        return (
            <p className="text-sm mt-5 text-center">
                Have an account?{' '}
                <Link to="/login" className="font-bold text-blue-600">
                    {/* Pindah halaman tanpa reload halaman dengan client side routing */}
                    Login
                </Link>
            </p>
        );
    }
};

export default AuthLayout;

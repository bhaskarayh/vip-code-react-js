import Counter from '../components/Fragments/Counter';

const Welcome = () => {
    return (
        <div className="flex justify-center flex-col">
            <h1 className="text-3xl font-bold text-center">Hello World!</h1>
            <div className="mt-5">
                <Counter></Counter>
            </div>
        </div>
    );
};

export default Welcome;

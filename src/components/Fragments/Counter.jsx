import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
            <div className="flex justify-center items-center gap-2 ">
                <h1 className="text-lg font-bold">{this.state.count}</h1>
                <button
                    className="p-2 bg-blue-300 rounded shadow-lg font-md"
                    onClick={() =>
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }
                >
                    +
                </button>
            </div>
        );
    }
}

export default Counter;

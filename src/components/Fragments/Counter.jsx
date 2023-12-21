import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        // #1
        console.log('Constructor');
    }

    // Melihat komponen pertama kali terjadi
    /* Cek Diagramnya https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ */
    componentDidMount() {
        this.setState({ count: 1 });
        // #2
        console.log('componentDidMount');
    }

    // Melihat setiap perubahan yang terjadi
    componentDidUpdate() {
        console.log('componentDidUpdate');
        if (this.state.count === 10) {
            this.setState({ count: 0 });
        }
    }

    render() {
        return (
            <div className="flex justify-center items-center gap-2 ">
                <h1 className="text-lg font-bold">{this.state.count}</h1>
                <button
                    className="p-2 bg-slate-800 text-white rounded shadow-lg font-md"
                    onClick={() =>
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }
                >
                    +
                </button>
                {/*  #3 */}
                {console.log('render')}
            </div>
        );
    }
}

export default Counter;

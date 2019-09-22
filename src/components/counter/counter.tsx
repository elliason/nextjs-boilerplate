import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '@components/counter/counter.actions';

interface IProps {
    counterCount: number;
    decrement: () => void;
    increment: () => void;
}

/* Redux bindings */
const mapStateToProps = (state) => {
    return {
        counterCount: state.counter.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        decrement: bindActionCreators(decrementCounter, dispatch),
        increment: bindActionCreators(incrementCounter, dispatch),
    };
};

class Counter extends Component<IProps> {
    render() {
        const { counterCount, increment, decrement } = this.props;

        return (
            <div className="counter">
                <p>{counterCount}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);

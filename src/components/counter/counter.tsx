import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '@components/counter/counter.actions';

/* Redux bindings */
const mapStateToProps = (state) => {
    return {
        counterCount: state.counter.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        decrementCounter: bindActionCreators(decrementCounter, dispatch),
        incrementCounter: bindActionCreators(incrementCounter, dispatch)
    };
};

/* class Counter extends Component {
    render() {
        const { counterCount, incrementCounter, decrementCounter } = this.props;

        return (
            <div className="counter">
                <p>{counterCount}</p>
                <button onClick={incrementCounter}>Increment</button>
                <button onClick={decrementCounter}>Decrement</button>
            </div>
        );
    }
}

export default connect(Counter; */

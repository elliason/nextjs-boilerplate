import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '@components/layouts/layout';
import { bindActionCreators } from 'redux';

import Clock from '@components/clock/clock';
import { startClock, serverRenderClock } from '@components/clock/clock.actions';

import Counter from '@components/counter/counter';

interface IProps {
    startClock: any;
    serverRenderClock: any;
    dispatch: any;
}

class Homepage extends Component<IProps> {
    static getInitialProps({ reduxStore, req }) {
        const isServer = !!req;
        reduxStore.dispatch(serverRenderClock(isServer));

        return {};
    }

    private timer: NodeJS.Timer;

    componentDidMount() {
        const { dispatch } = this.props;
        this.timer = startClock(dispatch);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <Clock />
                <Counter />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({ startClock, serverRenderClock }, dispatch)
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Homepage);

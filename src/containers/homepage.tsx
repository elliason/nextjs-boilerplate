import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '@components/layouts/layout';
import Clock from '@components/clock/clock';
import { startClock, serverRenderClock } from '../../store';
import { Dispatchable, mapDispatchToProps } from '@utils/with-redux-store';

interface Props {}

class Homepage extends Component<Dispatchable<Props>> {
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
            </div>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Homepage);

import { connect } from 'react-redux';
import React, { Component } from 'react';
import { startClock, serverRenderClock } from './clock.actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return state.clock;
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({ startClock, serverRenderClock }, dispatch)
    };
};

interface IProps {
    startClock?: any;
    serverRenderClock?: any;
    dispatch?: any;
    lastUpdate?: number;
    light?: boolean;
}

class Clock extends Component<IProps> {
    timer: NodeJS.Timer;

    componentDidMount() {
        const { dispatch } = this.props;
        this.timer = startClock(dispatch);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    format(t) {
        return `${this.pad(t.getUTCHours())}:${this.pad(t.getUTCMinutes())}:${this.pad(
            t.getUTCSeconds()
        )}`;
    }

    pad(n) {
        return n < 10 ? `0${n}` : n;
    }

    render() {
        const { lastUpdate, light } = this.props;
        /* console.log('props clock', this.props); */
        return (
            <div className={light ? 'light' : ''}>
                {this.format(new Date(lastUpdate))}
                <style jsx>{`
                    div {
                        padding: 15px;
                        display: inline-block;
                        color: #82fa58;
                        font: 50px menlo, monaco, monospace;
                        background-color: #000;
                    }

                    .light {
                        background-color: #999;
                    }
                `}</style>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Clock);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '@components/layouts/layout';
import { bindActionCreators } from 'redux';

import Clock from '@components/clock/clock';
import Counter from '@components/counter/counter';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Clock />
                <Counter />
            </div>
        );
    }
}

export default Homepage;

import React, { Component } from 'react';
import LanguageSwitch from './languageSwitch';
import { connect } from 'react-redux';
import { changeLanguage, getLanguages } from './actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        currentLanguage: state.language.language,
        allLanguages: state.language.allLanguages
    };
};

const mapDispatchToProps = { changeLanguage, getLanguages };

/* const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({ changeLanguage }, dispatch),
        ...bindActionCreators({ getLanguages }, dispatch)
    };
}; */

class LanguageSwitchContainer extends Component {
    constructor(props) {
        super(props);
        props.getLanguages();
    }

    render() {
        return <LanguageSwitch {...this.props} />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LanguageSwitchContainer);

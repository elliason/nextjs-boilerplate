import React from 'react';
import App, { Container } from 'next/app';
import { appWithTranslation } from '@utils/i18n';
import withReduxStore, { Store } from '@utils/redux/with-redux-store';
import { Provider } from 'react-redux';

interface Props {
    reduxStore: Store;
}

class MyApp extends App<Props> {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }

    /* static async getInitialProps({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        };
    } */

    render() {
        const { Component, pageProps, reduxStore } = this.props;
        return (
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default appWithTranslation(withReduxStore(MyApp));

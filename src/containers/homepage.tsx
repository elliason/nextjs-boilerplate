import React, { Component } from 'react';
import Layout from '@components/layouts/layout';
import { withTranslation } from '@utils/i18n';

/* class Homepage extends Component<Props> {
    render() {
        return (
            <div>
                <Layout>
                    <div>
                        <style jsx>{`
                            h1 {
                                text-decoration: underline;
                            }

                            .home-block1 {
                                display: flex;
                            }
                        `}</style>
                    </div>
                </Layout>
                <h1>{this.props.t('title-1')}</h1>

                <div className="home-block1">
                    <p>{this.props.t('intro-texts.text-1')}</p>
                    <p>{t('intro-texts.text-2')}</p>
                </div>
            </div>
        );
    }
} */

const Homepage = (props) => {
    return (
        <div>
            <Layout>
                <div>
                    <style jsx>{`
                        h1 {
                            text-decoration: underline;
                        }

                        .home-block1 {
                            display: flex;
                        }
                    `}</style>
                </div>
            </Layout>
            <h1>{props.t('title-1')}</h1>

            <div className="home-block1">
                <p>{props.t('intro-texts.text-1')}</p>
                <p>{props.t('intro-texts.text-2')}</p>
            </div>
            <div className="home-block2">
                <img src="/static/img/doggo.jpg" />
            </div>
        </div>
    );
};

export default withTranslation('common')(Homepage);

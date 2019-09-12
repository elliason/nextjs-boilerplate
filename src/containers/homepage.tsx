import React, { Component } from 'react';
import Layout from '@components/layouts/layout';
import { withTranslation, i18n } from '@utils/i18n';

const Homepage = (props) => {
    return (
        <div>
            <Layout>
                <style jsx>{`
                    h1 {
                        text-decoration: underline;
                    }

                    .home-block1 {
                        display: flex;
                    }

                    img {
                        width: 100%;
                    }
                `}</style>

                <div>
                    <h1>{props.t('title-1')}</h1>

                    <div className="home-block1">
                        <p>{props.t('intro-texts.text-1')}</p>
                        <p>{props.t('intro-texts.text-2')}</p>
                    </div>
                    <div className="home-block2">
                        <img src="/static/img/doggo.jpg" />
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'cs' : 'en')}
                    >
                        {props.t('change-locale')}
                    </button>
                </div>
            </Layout>
        </div>
    );
};

export default withTranslation('common')(Homepage);

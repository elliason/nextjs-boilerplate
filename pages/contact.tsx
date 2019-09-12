import Layout from '@components/layouts/layout';
import { withTranslation, i18n } from '@utils/i18n';

const ContactPage = ({ t, ...props }) => (
    <Layout>
        <div>
            <h1>{t('page-title')}</h1>
        </div>
        {console.log(props.currentLanguage, i18n.language)}
    </Layout>
);

ContactPage.getInitialProps = async ({ req }) => ({
    currentLanguage: req ? req.language : i18n.language,
    namespacesRequired: ['contact']
});

export default withTranslation('contact')(ContactPage);

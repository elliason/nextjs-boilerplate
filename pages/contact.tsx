import Layout from '@components/layouts/layout';
import { withTranslation, i18n } from '@utils/i18n';

const ContactPage = (props) => <Layout>{console.log(props.currentLanguage, i18n.language)}</Layout>;

ContactPage.getInitialProps = async ({ req }) => ({
    currentLanguage: req ? req.language : i18n.language,
    namespacesRequired: ['common']
});

export default withTranslation('common')(ContactPage);

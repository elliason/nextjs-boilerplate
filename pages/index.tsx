import Layout from '@components/layouts/layout';
import Homepage from '@containers/homepage';
import { withTranslation, i18n } from '@utils/i18n';

const Index = (props) => (
    <Layout>
        <Homepage />
        {console.log(props.currentLanguage, i18n.language)}
    </Layout>
);

Index.getInitialProps = async ({ req }) => ({
    currentLanguage: req ? req.language : i18n.language,
    namespacesRequired: ['common']
});

export default withTranslation('common')(Index);

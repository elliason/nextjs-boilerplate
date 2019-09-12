import Homepage from '@containers/homepage';
import { withTranslation, i18n } from '@utils/i18n';

const Index = (props) => (
    <div>
        <Homepage />
    </div>
);

Index.getInitialProps = async ({ req }) => ({
    currentLanguage: req ? req.language : i18n.language,
    namespacesRequired: ['common']
});

export default withTranslation('common')(Index);

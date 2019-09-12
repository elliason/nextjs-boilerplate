import Homepage from '@containers/homepage';
import { withTranslation, i18n } from '@utils/i18n';

const ContactPage = (props) => (
    <div>
        <Homepage />
        {console.log(props.currentLanguage)}
    </div>
);

ContactPage.getInitialProps = async ({ req }) => ({
    currentLanguage: req ? req.language : i18n.language,
    namespacesRequired: ['common']
});

export default withTranslation('common')(ContactPage);

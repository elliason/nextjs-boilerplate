import Homepage from '@containers/homepage';
import { withTranslation } from '@utils/i18n';

const Index = (props) => (
    <div>
        <Homepage />
    </div>
);

Index.getInitialProps = async () => ({
    namespacesRequired: ['common']
});

export default withTranslation('common')(Index);

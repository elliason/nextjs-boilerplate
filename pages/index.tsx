import Layout from '@components/layouts/layout';
import Homepage from '@containers/homepage';
import { withTranslation } from '@utils/i18n';
import { serverRenderClock } from '@components/clock/clock.actions';

const Index = (props) => (
    <Layout>
        <Homepage />
    </Layout>
);

Index.getInitialProps = async ({ reduxStore, req }) => {
    const isServer = !!req;
    reduxStore.dispatch(serverRenderClock(isServer));
    return {
        namespacesRequired: ['common']
    };
};

export default withTranslation('common')(Index);

import '@styles/styles.scss';
import Header from '@components/layouts/header';
import Footer from '@components/layouts/footer';

const Layout = (props) => (
    <div className="layout">
        <Header />
        <main>{props.children}</main>
        <Footer />
    </div>
);

export default Layout;

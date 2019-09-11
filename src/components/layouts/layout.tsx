import '@styles/styles.scss'
import testutil from '@utils/testutil'

const Layout = props => (
    <div className="layout">
        {props.children}
        {testutil()}
    </div>
)

export default Layout
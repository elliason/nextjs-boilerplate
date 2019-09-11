import React, { Component } from 'react'
import Layout from '@components/layouts/layout'
//import testutil from 'utils/testutil'

class Homepage extends Component {
    render() {
        return (
            <Layout>
                <div>
                <style jsx>{`
                    h1 {
                        text-decoration: underline;
                    }
                `}</style>
                    <h1>Hello worlde!</h1>
                </div>    
            </Layout>
        )
    }
}

export default Homepage;
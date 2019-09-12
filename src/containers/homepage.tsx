import React, { Component } from 'react';
import Layout from '@components/layouts/layout';

class Homepage extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <style jsx>{`
                        h1 {
                            text-decoration: underline;
                        }

                        .home-block1 {
                            display: flex;
                        }
                    `}</style>
                    <h1>Hello worlde!</h1>

                    <div className="home-block1">
                        <p>Test pes trest</p>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Homepage;

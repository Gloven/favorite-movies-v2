/* eslint-disable react/jsx-no-bind, react/no-multi-comp*/

import React, { Component }     from 'react';
import { Route }                from 'react-router';
import { Router }               from 'react-router-dom';
import history                  from './history.js';
import MainLayout               from './components/layouts/MainLayout.js';
import MainPage                 from './components/pages/MainPage';


function dummyLayout(props) {
    return props.children;
}

function AppRoute({ component: Page, layout, ...rest }) {   // eslint-disable-line react/prop-types
    return (
        <Route
            {...rest}
            render={props => {
                const Layout = layout ? layout : dummyLayout;

                return (
                    <MainLayout>
                        <Layout>
                            <Page {...props} />
                        </Layout>
                    </MainLayout>
                );
            }}
        />
    );
}

class App extends Component {  // Should be Component (without scu) to make context changing works
    render() {
        return (
            <Router history={history}>
                <div>
                    <AppRoute path='/' exact component={MainPage} />   {/* eslint-disable-line */}
                </div>
            </Router>
        );
    }
}

export default App;

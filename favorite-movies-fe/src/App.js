/* eslint-disable react/jsx-no-bind, react/no-multi-comp*/

import React, { Component }     from 'react';
import { Route }                from 'react-router';
import { Router }               from 'react-router-dom';
import history                  from './history.js';
import MainLayout               from './containers/MainLayout';
import MainPage                 from './components/pages/MainPage';
import TrendsPage               from './components/pages/TrendsPage';


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
                    <AppRoute exact path='/' component={MainPage} />
                    <AppRoute path='/new-releases' component={MainPage} />
                    <AppRoute path='/trending' component={TrendsPage} />
                </div>
            </Router>
        );
    }
}

export default App;

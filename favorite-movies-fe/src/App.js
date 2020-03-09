/* eslint-disable react/jsx-no-bind, react/no-multi-comp*/

import React, { Component }     from 'react';
import { Route }                from 'react-router';
import { Router }               from 'react-router-dom';
import history                  from './history.js';

import styles                   from './App.less';

import Sidebar                  from './components/Sidebar';
import Header                   from './components/ui-components/Header.js';
import MainLayout               from './containers/MainLayout';

import MainPage                 from './components/pages/MainPage';
import TrendsPage               from './components/pages/TrendsPage';
import ComingSoon               from './components/pages/ComingSoon';
import Favourites               from './components/pages/Favourites';
import WatchLater               from './components/pages/WatchLater';

function AppRoute({ component: Page, ...rest }) {   // eslint-disable-line react/prop-types
    return (
        <Route
            {...rest}
            render={props => {
                return (
                    <MainLayout>
                        <Page {...props} />
                    </MainLayout>
                );
            }}
        />
    );
}

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <React.Fragment>
                    <Header />
                    <div className={styles.contentWrapper}>
                        <Sidebar />
                        <React.Fragment>
                            <AppRoute exact path='/' component={MainPage} />
                            <AppRoute path='/new-releases' component={MainPage} />
                            <AppRoute path='/trending' component={TrendsPage} />
                            <AppRoute path='/coming-soon' component={ComingSoon} />
                            <AppRoute path='/favourites' component={Favourites} />
                            <AppRoute path='/watch-later' component={WatchLater} />
                        </React.Fragment>
                    </div>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;

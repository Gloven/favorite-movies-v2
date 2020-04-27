/* eslint-disable react/jsx-no-bind, react/no-multi-comp*/

import React, { Component }     from 'react';
import PropTypes                from 'prop-types';
import { Router }               from 'react-router-dom';
import { Route }                from 'react-router';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import history                  from '../history.js';

import * as sidebarActions      from '../actions/SidebarActions';

import Sidebar                  from '../components/ui-components/Sidebar/Sidebar';
import Header                   from '../components/ui-components/Header.js';
import MainLayout               from './MainLayout';

import NewReleases              from './NewReleases';

// import MainPage                 from './components/pages/MainPage';
// import TrendsPage               from './components/pages/TrendsPage';
// import ComingSoon               from './components/pages/ComingSoon';
// import Favourites               from './components/pages/Favourites';
// import WatchLater               from './components/pages/WatchLater';
import styles                   from './App.less';

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
    static propTypes = {
        activeTab: PropTypes.string,
        sidebarActions: PropTypes.object
    }

    render() {
        const { activeTab } = this.props;

        return (
            <Router history={history}>
                <React.Fragment>
                    <Header />
                    <div className={styles.contentWrapper}>
                        <Sidebar activeTab = {activeTab} selectTab = {this.props.sidebarActions.selectSidebarItem} />
                        <React.Fragment>
                            <AppRoute exact path='/' component={NewReleases} />
                            <AppRoute path='/new-releases' component={NewReleases} />
                            { /** <AppRoute path='/trending' component={TrendsPage} />
                            <AppRoute path='/coming-soon' component={ComingSoon} />
                            <AppRoute path='/favourites' component={Favourites} />
                            <AppRoute path='/watch-later' component={WatchLater} /> **/ }
                        </React.Fragment>
                    </div>
                </React.Fragment>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeTab: state.sidebar.activeTab
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sidebarActions  : bindActionCreators(sidebarActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

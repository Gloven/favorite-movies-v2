import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { connect }              from 'react-redux';
import { TransitionGroup }      from 'react-transition-group';
import Sidebar                  from './Sidebar.js';
import MainOuter                from './MainOuter.js';

import styles                   from './MainPage.less';

class FovoriteMovies extends PureComponent {
    static propTypes = {

    }

    static contextTypes = {
        i18n : PropTypes.object
    };

    state = {
        isOpened: false
    }

    render() {
        return (
            <TransitionGroup className={styles.MainPage}>
                <Sidebar />
                <MainOuter />
            </TransitionGroup>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps, { })(FovoriteMovies);


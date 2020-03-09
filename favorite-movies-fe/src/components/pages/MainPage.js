import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { connect }              from 'react-redux';

import styles                   from './MainPage.less';

class FovoriteMovies extends PureComponent {
    static propTypes = {

    }

    static contextTypes = {
        i18n : PropTypes.object
    };

    render() {
        return (
            <div className={styles.MainPage}>
                main page
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps, { })(FovoriteMovies);


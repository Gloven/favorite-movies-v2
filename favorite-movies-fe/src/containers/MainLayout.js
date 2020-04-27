import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { connect }              from 'react-redux';

import styles from './MainLayout.less';

class MainLayout extends PureComponent {
    static propTypes = {
        children        : PropTypes.element.isRequired
    }

    static contextTypes = {
        i18n : PropTypes.object
    }

    render() {
        const { children  } = this.props;

        return (
            <div className={styles.MainLayout}>
                {children}
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(MainLayout);

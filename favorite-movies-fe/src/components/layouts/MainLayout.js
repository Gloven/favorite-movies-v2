import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { mountApp }             from '../../main.js';
import { connect }              from 'react-redux';

import Header from '../Header.js';
import Footer from '../Footer.js';

import styles from './MainLayout.less';

class MainLayout extends PureComponent {
    static propTypes = {
        children        : PropTypes.element.isRequired
    }

    static contextTypes = {
        i18n : PropTypes.object
    }

    handleChange = locale => {
        localStorage.setItem('language', locale.toLowerCase());

        mountApp();
    };

    render() {
        const { children,  } = this.props;

        return (
            <div className={styles.MainLayout}>
                <Header />
                {children}
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(MainLayout);

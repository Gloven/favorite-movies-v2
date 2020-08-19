import PropTypes from 'prop-types';
import React from 'react';
import styles from './MainLayout.less';

function MainLayout(props) {
    const { children } = props;

    return (
        <div className={styles.MainLayout}>
            {children}
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.element.isRequired
};

export default (MainLayout);

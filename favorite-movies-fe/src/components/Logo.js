import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';

import styles from './Logo.less';


class Logo extends PureComponent {
    static propTypes = {
        imageUrl : PropTypes.string
    }

    render() {
        const { imageUrl }  = this.props;

        return (
            <div className={styles.LogoWrapper}>
                <img src= {imageUrl} alt='logo' className={styles.Logo} />
            </div>
        );
    }
}

export default Logo;

import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import classnames               from 'classnames/bind';

import styles                   from './Footer.less';

const cx = classnames.bind(styles);

export default class Footer extends PureComponent {
    render() {
        return (
            <div className={styles.Footer} id="footer">
                <p>{'Footer'}</p>
            </div>
        );
    }
}

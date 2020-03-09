import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';

import styles                   from './Header.less';

export default class Header extends PureComponent {
    static propTypes = {
    }
    static contextTypes = {
        i18n : PropTypes.object
    };

    render() {
        return (
            <div className={styles.Header}>
                <h4>Header</h4>
            </div>
        );
    }
}

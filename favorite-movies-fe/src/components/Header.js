import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import classnames               from 'classnames/bind';

import styles                   from './Header.less';

const cx = classnames.bind(styles);

export default class Header extends PureComponent {
    static propTypes = { }
    static contextTypes = {
        i18n : PropTypes.object
    };

    render() {
        const { l } = this.context.i18n;

        return (
            <div className={styles.Header}>
                <h1>{'collectionName'}</h1>
            </div>
        );
    }
}

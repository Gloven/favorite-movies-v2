import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { TransitionGroup }      from 'react-transition-group';

import styles                   from './MainOuter.less';

class MainOuter extends PureComponent {
    static propTypes = {
        className : PropTypes.string,
        children  : PropTypes.node.isRequired
    }

    render() {
        return (
            <TransitionGroup className={styles.MainOuter}>
                MainOuter
            </TransitionGroup>
        );
    }
}

export default MainOuter;

import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { TransitionGroup }      from 'react-transition-group';

import styles                   from './TrendsPage.less';

class TrendsPage extends PureComponent {
    static propTypes = {
        className : PropTypes.string
    }

    render() {
        return (
            <TransitionGroup className={styles.TrendsPage}>
                TrendsPage
            </TransitionGroup>
        );
    }
}

export default TrendsPage;

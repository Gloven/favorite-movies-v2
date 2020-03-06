import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { TransitionGroup }      from 'react-transition-group';

import SidebarMenu              from '../SidebarMenu';
import styles                   from './Sidebar.less';

const MOCK_DATA = [
    { id: 1, title: 'New releases' },
    { id: 2, title: 'Trending' },
    { id: 3, title: 'Coming soon' },
    { id: 4, title: 'Favourites' },
    { id: 5, title: 'Watch later' }
];

class Sidebar extends PureComponent {
    static propTypes = {

    }

    static contextTypes = {
        i18n : PropTypes.object
    };

    state = {
        isOpened: false
    }

    render() {
        return (
            <TransitionGroup className={styles.Sidebar}>
                <SidebarMenu menuItemsList = {MOCK_DATA} />
            </TransitionGroup>
        );
    }
}

export default Sidebar;

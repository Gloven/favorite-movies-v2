import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { TransitionGroup }      from 'react-transition-group';

import SidebarMenu              from './SidebarMenu';
import styles                   from './Sidebar.less';

const MOCK_DATA = [
    { id: 'new-releases', title: 'New releases' },
    { id: 'trending', title: 'Trending' },
    { id: 'coming-soon', title: 'Coming soon' },
    { id: 'favourites', title: 'Favourites' },
    { id: 'watch-later', title: 'Watch later' }
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

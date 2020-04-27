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
        selectTab: PropTypes.func.isRequired,
        activeTab: PropTypes.string
    }

    render() {
        const { selectTab, activeTab } = this.props;

        return (
            <TransitionGroup className={styles.Sidebar}>
                <SidebarMenu
                    activeTab     = {activeTab}
                    selectTab     = {selectTab}
                    menuItemsList = {MOCK_DATA}
                />
            </TransitionGroup>
        );
    }
}

export default Sidebar;

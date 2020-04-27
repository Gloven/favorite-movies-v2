import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import classnames               from 'classnames/bind';
import history                  from '../../../history';

import SidebarItem              from './SidebarItem';
import styles                   from './SidebarMenu.less';


const cx = classnames.bind(styles);

class Sidebar extends PureComponent {
    static propTypes = {
        menuItemsList : PropTypes.array.isRequired,
        activeTab     : PropTypes.string.isRequired,
        selectTab     : PropTypes.func.isRequired
    }

    handleClick = (id) => {
        this.props.selectTab(id);
        history.push(id);
    }

    isActiveTab = id =>  this.props.activeTab === id;

    render() {
        const { menuItemsList } = this.props;

        return (
            <div className={styles.SidebarMenu}>
                {
                    menuItemsList.map(item => {
                        const isActive = this.isActiveTab(item.id);
                        const tabStyles = cx({
                            tab   : true,
                            active: isActive
                        });

                        return (
                            <SidebarItem
                                onClick = {this.handleClick}
                                id  = {item.id}
                                key = {item.id}
                                title={item.title}
                                isActive = {isActive}
                                tabStyles = {tabStyles}
                            />
                        );
                    })
                }
                <hr />
            </div>
        );
    }
}

export default Sidebar;

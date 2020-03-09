import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import classnames               from 'classnames/bind';
import history                  from '../history';


import Icon                     from './ui-components/Icon';
import styles                   from './SidebarMenu.less';


const cx = classnames.bind(styles);

class Sidebar extends PureComponent {
    static propTypes = {
        menuItemsList: PropTypes.array.isRequired
    }

    static contextTypes = {
        i18n : PropTypes.object
    };

    state = {
        isActiveId: 1
    }

    handleClick = (id) => {
        this.setState({
            isActiveId: id
        });

        history.push(id);
    }

    isActiveTab = id => this.state.isActiveId === id;

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
                            <div
                                onClick = {this.handleClick.bind(this, item.id)}
                                className={tabStyles} key={item.id}
                            >
                                {item.title}
                                { isActive ?  <Icon type='arrowRight' /> : null }
                            </div>
                        );
                    })
                }
                <hr />
            </div>
        );
    }
}

export default Sidebar;

import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import Icon                     from '../Icon';

class SidebarItem extends Component {
    static propTypes = {
        onClick   : PropTypes.func.isRequired,
        id        : PropTypes.string.isRequired,
        title     : PropTypes.string,
        tabStyles : PropTypes.string,
        isActive  : PropTypes.bool
    }

    handleClick = () => {
        const { id, onClick } = this.props;

        onClick(id);
    }

    render() {
        const { tabStyles, title, isActive } = this.props;

        return (
            <div
                onClick = {this.handleClick}
                className={tabStyles}
            >
                {title}
                { isActive ?  <Icon type='arrowRight' /> : null }
            </div>
        );
    }
}

export default SidebarItem;

import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import classnames               from 'classnames/bind';

import styles from './Button.less';
import Icon   from './Icon';

const cx = classnames.bind(styles);

class Button extends PureComponent {
    static propTypes = {
        label     : PropTypes.string,
        onClick   : PropTypes.func,
        className : PropTypes.string,
        type      : PropTypes.string
    }

    handleClick = () => {
        const { onClick } = this.props;

        if (onClick) onClick();
    }

    render() {
        const { label, className, type, icon } = this.props;

        const classes = cx({
            Button      : true,
            [type]      : type,
            [className] : className
        });

        return (
            <div
                className = {classes}
                onClick   = {this.handleClick}
            >
                {icon
                    ? <Icon type={icon} />
                    : null
                }
                {label}
            </div>
        );
    }
}

export default Button;

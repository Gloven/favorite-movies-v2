import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import classnames               from 'classnames/bind';

import close                    from '../../assets/icons/close.svg';
import globe                    from '../../assets/icons/globe.svg';
import check                    from '../../assets/icons/check.svg';
import checkCircle              from '../../assets/icons/checkCircle.svg';
import download                 from '../../assets/icons/download.svg';
import angleLeft                from '../../assets/icons/angleLeft.svg';
import angleRight               from '../../assets/icons/angleRight.svg';
import angleDown                from '../../assets/icons/angleDown.svg';
import plus                     from '../../assets/icons/plus.svg';
import arrowRight               from '../../assets/icons/arrowRight.svg';

import styles                   from './Icon.less';

const cx = classnames.bind(styles);

const ICONS = {
    close,
    globe,
    arrowRight,
    check,
    download,
    angleRight,
    angleLeft,
    angleDown,
    checkCircle,
    plus
};

class Icon extends PureComponent {
    static propTypes = {
        type     : PropTypes.string.isRequired,
        onClick  : PropTypes.func,
        style    : PropTypes.object,
        className: PropTypes.string
    };

    static defaultProps = {
        onClick: null,
        style  : {}
    };

    handleClick = e => {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    };

    render() {
        const { type, style, onClick, className } = this.props;
        const Svg = ICONS[type];
        const iconStyle = cx({
            Icon       : true,
            [type]     : type,
            clicked    : onClick,
            [className]: className
        });

        return (
            <i className={iconStyle} style={style} onClick={this.handleClick}>
                <Svg />
            </i>
        );
    }
}

export default Icon;

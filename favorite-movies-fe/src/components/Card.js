import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import classnames               from 'classnames/bind';

import styles from './Card.less';

const cx = classnames.bind(styles);

class Card extends PureComponent {
    static propTypes = {
        className : PropTypes.string,
        children  : PropTypes.node.isRequired
    }

    render() {
        const { children, className } = this.props;

        const classes = cx({
            Card        : true,
            [className] : className
        });

        return (
            <div className={classes}>
                {children}
            </div>
        );
    }
}

export default Card;

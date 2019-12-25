import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import classnames               from 'classnames/bind';
import { TransitionGroup }      from 'react-transition-group';
import { Fade }                 from '../utils/animations.js';

import styles from './Input.less';

const cx = classnames.bind(styles);

class Input extends PureComponent {
    static propTypes = {
        type         : PropTypes.string,
        value        : PropTypes.string,
        name         : PropTypes.string,
        id           : PropTypes.string,
        defaultValue : PropTypes.string,
        placeholder  : PropTypes.string,
        errorText    : PropTypes.string,
        onChange     : PropTypes.func,
        onBlur       : PropTypes.func,
        className    : PropTypes.string
    }

    handleChange = e => {
        const { onChange, name } = this.props;

        if (onChange) onChange(name, e.target.value);
    }

    handleBlur = e => {
        const { onBlur, type } = this.props;

        if (onBlur) onBlur(type, e.target.value);
    }

    _getType() {
        const { type } = this.props;

        return type ? type : 'text';
    }

    render() {
        const { value, placeholder, errorText, className, defaultValue, name, id } = this.props;

        const classes = cx({
            Input       : true,
            [className] : className
        });

        const inputClasses = cx({ error: errorText });

        return (
            <div className={classes}>
                <input
                    className    = {inputClasses}
                    defaultValue = {defaultValue}
                    id           = {id}
                    value        = {value}
                    name         = {name}
                    type         = {this._getType()}
                    placeholder  = {placeholder}
                    onChange     = {this.handleChange}
                    onBlur       = {this.handleBlur}
                />
                <TransitionGroup>
                    {
                        errorText
                            ? <Fade>
                                <div className={styles.alert}>
                                    {errorText}
                                </div>
                            </Fade>                                      // eslint-disable-line
                            : null
                    }
                </TransitionGroup>
            </div>
        );
    }
}

export default Input;

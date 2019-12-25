import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';

class Provider extends PureComponent {
    static propTypes = {
        i18n     : PropTypes.object.isRequired,
        children : PropTypes.object.isRequired
    };

    static childContextTypes = { i18n: PropTypes.object };

    getChildContext() {
        return { i18n: this.props.i18n };
    }

    render() {
        return React.Children.only(this.props.children);
    }
}

export default Provider;

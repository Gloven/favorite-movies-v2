import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { connect }              from 'react-redux';
import { TransitionGroup }      from 'react-transition-group';

import styles                   from './MainPage.less';

class GenerationTexture extends PureComponent {
    static contextTypes = {
        i18n : PropTypes.object
    };

    static propTypes = {
       
    }

    state = {
        isOpened: false
    }

    render() {
        return (
            <TransitionGroup className={styles.GenerationTexture}>
                <h1>Some title</h1>
            </TransitionGroup>
        );
    }
}

const getSelectedData = state => {
    return {
        ...state
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps, { })(GenerationTexture);


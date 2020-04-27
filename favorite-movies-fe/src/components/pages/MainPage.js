import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import MoviesList                from '../ui-components/MoviesList';

import styles                   from './MainPage.less';

class FovoriteMovies extends PureComponent {
    static propTypes = {
        moviesList: PropTypes.arrayOf(Object)
    }

    render() {
        const { moviesList } = this.props;

        return (
            <div className={styles.MainPage}>
                <h1>New Releases</h1>
                <MoviesList moviesList = {moviesList} />
            </div>
        );
    }
}

export default (FovoriteMovies);


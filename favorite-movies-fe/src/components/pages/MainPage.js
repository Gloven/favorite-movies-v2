import PropTypes from 'prop-types';
import React from 'react';
import MoviesList from '../ui-components/MoviesList';
import styles from './MainPage.less';

function FovoriteMovies(props) {
    const { moviesList } = props;

    return moviesList ? (
        <div className={styles.MainPage}>
            <h1>New Releases</h1>
            <MoviesList moviesList={moviesList} />
        </div>
    ) : <div>Loading...</div>;
}

FovoriteMovies.propTypes = {
    moviesList: PropTypes.arrayOf(Object)
};

export default (FovoriteMovies);


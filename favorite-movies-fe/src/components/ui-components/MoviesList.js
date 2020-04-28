import React       from 'react';
import PropTypes   from 'prop-types';
import classnames  from 'classnames/bind';

import MovieCard   from './MovieCard';

import styles from './MoviesList.less';

const cx = classnames.bind(styles);

function MoviesList(props) {
    const { moviesList, className } = props;
    const classes = cx({
        MoviesList  : true,
        [className] : className
    });

    return (
        <div className={classes}>
            { moviesList.map(movie => {
                const { rate, genre, posterUrl, name, _id } = movie;

                return (
                    <MovieCard
                        key= {_id}
                        rating={rate}
                        genre={genre}
                        imgUrl={posterUrl}
                        name={name}
                        id={_id}
                    />
                );
            })}
        </div>
    );
}

MoviesList.propTypes = {
    className : PropTypes.string,
    moviesList: PropTypes.array.isRequired
};

export default MoviesList;

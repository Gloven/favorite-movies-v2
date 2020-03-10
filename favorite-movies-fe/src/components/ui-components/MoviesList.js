import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import classnames               from 'classnames/bind';

import MovieCard                from './MovieCard';

import styles from './MoviesList.less';

const cx = classnames.bind(styles);

class MoviesList extends PureComponent {
    static propTypes = {
        className : PropTypes.string,
        moviesList: PropTypes.array.isRequired
    }

    render() {
        const { moviesList, className } = this.props;

        const classes = cx({
            MoviesList  : true,
            [className] : className
        });

        return (
            <div className={classes}>
                { moviesList.map(movie => {
                    const { rating, genre, imgUrl, name, id } = movie;

                    return (
                        <MovieCard
                            key= {id}
                            rating={rating}
                            genre={genre}
                            imgUrl={imgUrl}
                            name={name}
                            id={id}
                        />
                    );
                })}
            </div>
        );
    }
}

export default MoviesList;

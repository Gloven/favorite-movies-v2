import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Link }             from 'react-router-dom';
import classnames               from 'classnames/bind';

import styles                   from './MovieCard.less';


const cx = classnames.bind(styles);


class MovieCard extends Component {
    static propTypes = {
        className: PropTypes.string,
        rating   : PropTypes.string,
        genre    : PropTypes.string,
        imgUrl   : PropTypes.string.isRequired,
        name     : PropTypes.string.isRequired,
        id       : PropTypes.string.isRequired
    }
    static defaultProps = {

    }

    render() {
        const { className, rating, imgUrl, name, genre, id } = this.props;

        const classes = cx({
            MovieCard   : true,
            [className] : className
        });

        return (
            <div className={classes}>
                <Link to={id}>
                    <div className={styles.imageWrapper}>
                        <div className={styles.rating}>{rating}</div>
                        <img src={imgUrl} />
                    </div>
                    <div className={styles.titleWrapper}>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.genre}>{genre}</div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default MovieCard;

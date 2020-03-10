import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { connect }              from 'react-redux';

import MoviesList                from '../ui-components/MoviesList';

import styles                   from './MainPage.less';

const MOCKED_DATA = [
    {
        id: '1',
        rating: '8.2',
        genre: 'Action, Fantasy, Mistery',
        name: 'Pirates of the Caribbean',
        imgUrl: 'https://st.kp.yandex.net/images/film_iphone/iphone360_4374.jpg'
    },
    {
        id: '2',
        rating: '9.3',
        genre: ' Animation, Adventure, Comedy',
        name: 'Rick and Morty',
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81PTfHlzQrL._AC_SY550_.jpg'
    },
    {
        id: '3',
        rating: '8.4',
        genre: 'Drama, War ',
        name: '1917',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SY1000_CR0,0,631,1000_AL_.jpg'
    },
    {
        id: '4',
        rating: '8.6',
        genre: 'Crime, Drama, Thriller',
        name: 'Joker',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
    },
    {
        id: '5',
        rating: '8.0',
        genre: 'Comedy, Crime, Drama',
        name: 'Knives Out',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SY1000_SX675_AL_.jpg'
    }
];

class FovoriteMovies extends PureComponent {
    static propTypes = {

    }

    static contextTypes = {
        i18n : PropTypes.object
    };

    render() {
        return (
            <div className={styles.MainPage}>
                <h1>New Releases</h1>
                <MoviesList moviesList = {MOCKED_DATA} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps, { })(FovoriteMovies);


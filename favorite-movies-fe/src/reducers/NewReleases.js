import { LOAD_NEW_RELEASES } from '../actions/NewReleasesActions';

// const MOCKED_DATA = [
//     {
//         id: '1',
//         rating: '8.2',
//         genre: 'Action, Fantasy, Mistery',
//         name: 'Pirates of the Caribbean',
//         imgUrl: 'https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
//     },
//     {
//         id: '2',
//         rating: '9.3',
//         genre: ' Animation, Adventure, Comedy',
//         name: 'Rick and Morty',
//         imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81PTfHlzQrL._AC_SY550_.jpg'
//     },
//     {
//         id: '3',
//         rating: '8.4',
//         genre: 'Drama, War ',
//         name: '1917',
//         imgUrl: 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SY1000_CR0,0,631,1000_AL_.jpg'
//     },
//     {
//         id: '4',
//         rating: '8.6',
//         genre: 'Crime, Drama, Thriller',
//         name: 'Joker',
//         imgUrl: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
//     },
//     {
//         id: '5',
//         rating: '8.0',
//         genre: 'Comedy, Crime, Drama',
//         name: 'Knives Out',
//         imgUrl: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SY1000_SX675_AL_.jpg'
//     },
//     {
//         id: '6',
//         rating: '8.6',
//         genre: 'Crime, Drama, Thriller',
//         name: 'Joker',
//         imgUrl: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
//     },
//     {
//         id: '7',
//         rating: '8.0',
//         genre: 'Comedy, Crime, Drama',
//         name: 'Knives Out',
//         imgUrl: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SY1000_SX675_AL_.jpg'
//     }
// ];

const initialState = {
    moviesList: []
};


export default function NewReleasesReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_NEW_RELEASES: {
            return {
                ...state,
                moviesList: payload
            };
        }
        default:
            return state;
    }
}

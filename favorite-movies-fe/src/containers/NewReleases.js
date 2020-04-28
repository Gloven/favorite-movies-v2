import React, { useEffect }     from 'react';
import PropTypes                from 'prop-types';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';

import  * as newReleasesActions from '../actions/NewReleasesActions';

import MainPage                 from '../components/pages/MainPage';


function NewReleases(props) {
    useEffect(() => {
        props.newReleasesActions.loadNewReleases();
    }, []);
    const { moviesList }  = props;

    return  <MainPage moviesList = {moviesList} />;
}

NewReleases.propTypes = {
    newReleasesActions : PropTypes.object,
    moviesList         : PropTypes.array
};

function mapStateToProps(state) {
    return {
        moviesList: state.newReleases.moviesList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        newReleasesActions  : bindActionCreators(newReleasesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReleases);

import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newReleasesActions from '../actions/NewReleasesActions';
import MainPage from '../components/pages/MainPage';

function NewReleases(props) {
    const { moviesList } = props;

    useEffect(() => {
        props.newReleasesActions.loadNewReleases();
    }, []);

    return <MainPage moviesList={moviesList} />;
}

NewReleases.propTypes = {
    newReleasesActions: PropTypes.object,
    moviesList: PropTypes.array
};

function mapStateToProps(state) {
    return {
        moviesList: state.newReleases.moviesList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        newReleasesActions: bindActionCreators(newReleasesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReleases);

import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';

import  * as newReleasesActions from '../actions/NewReleasesActions';

import MainPage                 from '../components/pages/MainPage';


class NewReleases extends PureComponent {
    static propTypes = {
        newReleasesActions : PropTypes.func,
        moviesList         : PropTypes.array
    }

    componentWillMount() {
        this.props.newReleasesActions.loadNewReleases();
    }

    render() {
        const { moviesList } = this.props;

        return (
            <MainPage
                moviesList = {moviesList}
            />
        );
    }
}

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

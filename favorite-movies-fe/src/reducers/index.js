import { combineReducers } from 'redux';
import sidebar             from './Sidebar';
import newReleases         from './NewReleases';

export default combineReducers({
    sidebar,
    newReleases
});

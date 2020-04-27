import api from '../apiSingleton';

export const LOAD_NEW_RELEASES = 'LOAD_NEW_RELEASES';

export function loadNewReleases() {
    return async dispatch => {
        const payload = await api.newReleases.list();

        dispatch({
            type: LOAD_NEW_RELEASES,
            payload
        });
    };
}

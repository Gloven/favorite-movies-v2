// import { loadListBricks, initDefaultSelectedData }   from './BrickActions';


export const START_LOADING  = 'START_LOADING';
export const FINISH_LOADING = 'FINISH_LOADING';

export function initApp() {
    return async dispatch => {
        dispatch({ type: START_LOADING });
        await Promise.all([
            // dispatch(loadListRegions()),
            // dispatch(loadListBricks()),
            // dispatch(loadListBonds()),
            // dispatch(loadJointColours()),
            // dispatch(loadListFormats()),
        ]);
        // dispatch(initDefaultSelectedData());
        dispatch({ type: FINISH_LOADING });
    };
}

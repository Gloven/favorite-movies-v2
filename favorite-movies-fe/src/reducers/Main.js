import { START_LOADING, FINISH_LOADING } from '../actions/MainActions';

const initialState = {};

export default function MainReducer(state = initialState, action) {
    const { type } = action;

    switch (type) {
        case START_LOADING: {
            return {
                ...state
            }
        }  
        case FINISH_LOADING: {
            return {
                ...state
            }
        }
        default:
            return state;
    }
}

import { SELECT_SIDEBAR_ITEM } from '../actions/SidebarActions';

const initialState = {
    activeTab: 'new-releases'
};

export default function SidebarReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SELECT_SIDEBAR_ITEM: {
            return {
                ...state,
                activeTab: payload
            };
        }
        default:
            return state;
    }
}

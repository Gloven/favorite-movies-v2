export const SELECT_SIDEBAR_ITEM  = 'SELECT_SIDEBAR_ITEM';

export function selectSidebarItem(payload) {
    return async dispatch => {
        dispatch({
            type: SELECT_SIDEBAR_ITEM,
            payload
        });
    };
}

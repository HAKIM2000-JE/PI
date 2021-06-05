import { SET_USERS } from './actions';
function usersReducer(state = {}, action) {
    switch (action.type) {
        case SET_USERS:
            state = JSON.parse(JSON.stringify(action.payload));
            return state;
        default:
            return state
    }
}
export { usersReducer };

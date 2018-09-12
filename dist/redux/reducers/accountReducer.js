import { ACCOUNT, DESTROY_ACCOUNT } from '../actions/accountActions.js';
export const account = (state = null, action) => {
    switch (action.type) {
        case ACCOUNT:
            return action.data.account;
        case DESTROY_ACCOUNT:
            return null;
        default:
            return state;
    }
};

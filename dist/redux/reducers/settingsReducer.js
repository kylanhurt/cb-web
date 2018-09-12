import { combineReducers } from 'redux';
export const isoFiatCurrencyCode = (state = 'USD', action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export const settings = combineReducers({
    isoFiatCurrencyCode
});

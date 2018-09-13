"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
exports.isoFiatCurrencyCode = (state = 'USD', action) => {
    switch (action.type) {
        default:
            return state;
    }
};
exports.settings = redux_1.combineReducers({
    isoFiatCurrencyCode: exports.isoFiatCurrencyCode
});
//# sourceMappingURL=settingsReducer.js.map
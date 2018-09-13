"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokenActions_js_1 = require("../actions/tokenActions.js");
const redux_1 = require("redux");
const initialState = {
    tokensDirectory: []
};
exports.tokensDirectory = (state = initialState.tokensDirectory, action) => {
    const { data } = action;
    switch (action.type) {
        case tokenActions_js_1.TOKENS_DIRECTORY:
            return data.tokensDirectory;
        default:
            return state;
    }
};
exports.tokens = redux_1.combineReducers({
    tokensDirectory: exports.tokensDirectory
});
//# sourceMappingURL=tokensReducer.js.map
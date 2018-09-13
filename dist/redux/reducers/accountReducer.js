"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountActions_js_1 = require("../actions/accountActions.js");
exports.account = (state = null, action) => {
    switch (action.type) {
        case accountActions_js_1.ACCOUNT:
            return action.data.account;
        case accountActions_js_1.DESTROY_ACCOUNT:
            return null;
        default:
            return state;
    }
};
//# sourceMappingURL=accountReducer.js.map
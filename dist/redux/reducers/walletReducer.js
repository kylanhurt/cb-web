"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountActions_js_1 = require("../actions/accountActions.js");
exports.wallets = (state = {}, action) => {
    if (!action.data)
        return state;
    const { wallet } = action.data;
    switch (action.type) {
        case accountActions_js_1.WALLET:
            return Object.assign({}, state, { [wallet.id]: wallet });
        case accountActions_js_1.DESTROY_ACCOUNT:
            return {};
        default:
            return state;
    }
};
//# sourceMappingURL=walletReducer.js.map
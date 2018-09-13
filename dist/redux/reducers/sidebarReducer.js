"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sidebarActions_1 = require("../actions/sidebarActions");
const initialState = {
    show: false,
    collapse: false
};
function default_1(state = initialState, action) {
    switch (action.type) {
        case sidebarActions_1.CHANGE_SIDEBAR_VISIBILITY:
            return Object.assign({}, state, { collapse: !state.collapse });
        case sidebarActions_1.CHANGE_MOBILE_SIDEBAR_VISIBILITY:
            return Object.assign({}, state, { show: !state.show });
        default:
            return state;
    }
}
exports.default = default_1;
//# sourceMappingURL=sidebarReducer.js.map
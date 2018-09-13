"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const themeActions_1 = require("../actions/themeActions");
const initialState = {
    className: 'theme-light'
};
function default_1(state = initialState, action) {
    switch (action.type) {
        case themeActions_1.CHANGE_THEME_TO_DARK:
            return { className: 'theme-dark' };
        case themeActions_1.CHANGE_THEME_TO_LIGHT:
            return { className: 'theme-light' };
        default:
            return state;
    }
}
exports.default = default_1;
//# sourceMappingURL=themeReducer.js.map
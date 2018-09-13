"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const index_1 = require("../redux/reducers/index");
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
const reducer = redux_1.combineReducers({
    account: index_1.account,
    wallets: index_1.wallets,
    exchange: index_1.exchange,
    tokens: index_1.tokens,
    settings: index_1.settings,
    theme: index_1.themeReducer,
    sidebar: index_1.sidebarReducer
});
const store = redux_1.createStore(reducer, composeEnhancers(redux_1.applyMiddleware(redux_thunk_1.default)));
exports.default = store;
//# sourceMappingURL=store.js.map
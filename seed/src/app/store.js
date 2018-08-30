import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reducer as reduxFormReducer} from 'redux-form';
import {account, sidebarReducer, themeReducer, tokens} from '../redux/reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  account,
  tokens,
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer
});
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

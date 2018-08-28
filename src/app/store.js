import {combineReducers, createStore} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {account, sidebarReducer, themeReducer} from '../redux/reducers/index';

const reducer = combineReducers({
  account,
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;

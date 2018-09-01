import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {
  account,
  sidebarReducer,
  themeReducer,
  tokens,
  exchange,
  settings
} from '../redux/reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reducer = combineReducers({
  account,
  exchange,
  tokens,
  settings,
  theme: themeReducer,
  sidebar: sidebarReducer
})
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store

import {
  TOKENS_DIRECTORY
} from '../actions/tokenActions.js'
import { combineReducers } from 'redux';

const initialState = {
  tokensDirectory: []
}

export const tokensDirectory = (state = initialState.tokensDirectory, action) => {
  const { data } = action
  switch (action.type) {
    case TOKENS_DIRECTORY:
      return data.tokensDirectory
    default:
      return state
  }
}

export const tokens = combineReducers({
  tokensDirectory
})
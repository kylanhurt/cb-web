import { ACCOUNT } from '../actions/accountActions.js'

export const account = (state = null, action) => {
  switch (action.type) {
    case ACCOUNT:
      return action.data.account
    default:
      return state
  }
}

import { WALLET } from '../actions/accountActions.js'

export const wallets = (state = {}, action) => {
  if (!action.data) return state
  const { wallet } = action.data
  switch (action.type) {
    case WALLET:
      return {
        ...state,
        [wallet.id]: wallet
      }
    default:
      return state
  }
}

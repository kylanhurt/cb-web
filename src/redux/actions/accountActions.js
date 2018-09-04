export const ACCOUNT = 'ACCOUNT'
export const WALLET = 'WALLET'
export const DESTROY_ACCOUNT = 'DESTROY_ACCOUNT'

export const logIn = (account) => async (dispatch, getState) => {
  dispatch(updateAccount(account))
  const firstWallet = account.getFirstWalletInfo('wallet:ethereum')
  if (firstWallet == null) {
    account.createCurrencyWallet('wallet:ethereum')
      .then(wallet => {
        dispatch(updateWallet(wallet))
      })
      .catch((e) => {
        console.log('logIn error: ', e)
      })
  } else {
    dispatch(updateWallet(firstWallet))
  }
}

export const updateAccount = (account) => ({
  type: ACCOUNT,
  data: { account }
})

export const updateWallet = (wallet) => {
  return {
    type: WALLET,
    data: { wallet }
  }
}

export const logOut = () => (dispatch, getState) => {
  const state = getState()
  const account = state.account
  if (account) account.logout()
  dispatch(destroyAccount())
}

export const destroyAccount = () => ({
  type: DESTROY_ACCOUNT,
  data: { account: null }
})

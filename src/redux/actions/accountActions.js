export const ACCOUNT = 'ACCOUNT'

export const logIn = (account) => async (dispatch, getState) => {
  console.log('about to update account: ', account)
  dispatch(updateAccount(account))
  if (account.getFirstWalletInfo('wallet:ethereum') == null) {
      account.createCurrencyWallet('wallet:ethereum')
      .then((wallet) => {
        const walletId = account.getFirstWalletInfo('wallet:ethereum').id
        console.log('walletId is: ', walletId)
      })
      .catch((e) => {
      console.log('logIn error: ', e)
    })
  }
}

export const updateAccount = (account) => ({
  type: ACCOUNT,
  data: { account }
})

export const logOut = () => (dispatch: Dispatch, getState: getState) => {
  const state = getState()
  const account = state.account
  if (account) account.logout()
  dispatch(destroyAccount())
}

export const destroyAccount = () => ({
  type: ACCOUNT,
  data: { account: null }
})
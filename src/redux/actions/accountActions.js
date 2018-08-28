export const ACCOUNT = 'ACCOUNT'

export const updateAccount = (account) => ({
  type: ACCOUNT,
  data: { account }
})

export const destroyAccount = () => ({
  type: ACCOUNT,
  data: { account: null }
})
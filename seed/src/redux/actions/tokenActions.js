import tokens from '../../tokens.js'
export const TOKENS_DIRECTORY = 'TOKENS_DIRECTORY'
console.log('tokens: ', tokens)

const tokenDirectory = tokens

export const fetchTokenList = () => (dispatch: Dispatch, getState: GetState) => {
  // will need to get API keys for GitHub
  /* const request = new Request('https://raw.githubusercontent.com/kvhnuke/etherwallet/mercury/app/scripts/tokens/ethTokens.json', {
    method: 'GET',
    headers: new Headers({
      'content-type': 'text/plain; charset=utf-8'
    }),
    redirect: 'follow'
  })
  fetch(request)
  .then((response) => {
    if (response.ok) {
      const tokenList = response.json() */

      console.log('DEX: kylan testing, tokenList is: ', tokenDirectory)
      dispatch(updateTokensDirectory(tokenDirectory))
    // }
  // })
}

export function updateTokensDirectory (tokensDirectory: Array<Object>) {
  return {
    type: TOKENS_DIRECTORY,
    data: { tokensDirectory }
  }
}
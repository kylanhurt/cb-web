export const TOKENS_DIRECTORY = 'TOKENS_DIRECTORY'

export const fetchTokenList = () => (dispatch: Dispatch, getState: GetState) => {
  // will need to get API keys for GitHub
  const request = new Request('https://raw.githubusercontent.com/kvhnuke/etherwallet/mercury/app/scripts/tokens/ethTokens.json', {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      'content-type': 'text/plain; charset=utf-8'
    }),
    redirect: 'follow'
  })
  fetch(request)
  .then(response => response.json())
  .then(tokensDirectory => {
    dispatch(updateTokensDirectory(tokensDirectory))
  })
}

export function updateTokensDirectory (tokensDirectory: Array<Object>) {
  return {
    type: TOKENS_DIRECTORY,
    data: { tokensDirectory }
  }
}

export const TOKENS_DIRECTORY = 'TOKENS_DIRECTORY'

const tokenDirectoryUrl = 'https://raw.githubusercontent.com/kvhnuke/etherwallet/mercury/app/scripts/tokens/ethTokens.json'

export const fetchTokenList = () => (dispatch, getState) => {
  // will need to get API keys for GitHub

  fetch(tokenDirectoryUrl)
    .then(response => response.json())
    .then(tokensDirectory => {
      dispatch(updateTokensDirectory(tokensDirectory))
    })
}

export function updateTokensDirectory (tokensDirectory) {
  return {
    type: TOKENS_DIRECTORY,
    data: { tokensDirectory }
  }
}

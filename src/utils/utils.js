
export const ellipsizeString = (input: string, length: number): string => {
  const inputLength = input.length
  const halfway = length / 2
  const firstHalf = input.slice(0, halfway)
  const secondHalf = input.slice(inputLength - halfway, inputLength)
  const output = `${firstHalf}...${secondHalf}`
  return output
}

export const getTokenInfo = (currencyCode, state) => {
  const tokensDirectory = state.tokens.tokensDirectory
  if (!tokensDirectory) return null
  const tokenInfo = tokensDirectory.find(token => token.symbol === currencyCode)
  if (!tokenInfo) return null
  return tokenInfo
}

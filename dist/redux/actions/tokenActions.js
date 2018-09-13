"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKENS_DIRECTORY = 'TOKENS_DIRECTORY';
const tokenDirectoryUrl = 'https://raw.githubusercontent.com/kvhnuke/etherwallet/mercury/app/scripts/tokens/ethTokens.json';
exports.fetchTokenList = () => (dispatch, getState) => {
    // will need to get API keys for GitHub
    fetch(tokenDirectoryUrl)
        .then(response => response.json())
        .then(tokensDirectory => {
        dispatch(updateTokensDirectory(tokensDirectory));
    });
};
function updateTokensDirectory(tokensDirectory) {
    return {
        type: exports.TOKENS_DIRECTORY,
        data: { tokensDirectory }
    };
}
exports.updateTokensDirectory = updateTokensDirectory;
//# sourceMappingURL=tokenActions.js.map
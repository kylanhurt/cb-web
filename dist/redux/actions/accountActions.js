var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const ACCOUNT = 'ACCOUNT';
export const WALLET = 'WALLET';
export const DESTROY_ACCOUNT = 'DESTROY_ACCOUNT';
export const logIn = (account) => (dispatch, getState) => __awaiter(this, void 0, void 0, function* () {
    dispatch(updateAccount(account));
    const firstWallet = account.getFirstWalletInfo('wallet:ethereum');
    if (firstWallet == null) {
        account.createCurrencyWallet('wallet:ethereum')
            .then(wallet => {
            dispatch(updateWallet(wallet));
        })
            .catch((e) => {
            console.log('logIn error: ', e);
        });
    }
    else {
        dispatch(updateWallet(firstWallet));
    }
});
export const updateAccount = (account) => ({
    type: ACCOUNT,
    data: { account }
});
export const updateWallet = (wallet) => {
    return {
        type: WALLET,
        data: { wallet }
    };
};
export const logOut = () => (dispatch, getState) => {
    const state = getState();
    const account = state.account;
    if (account)
        account.logout();
    dispatch(destroyAccount());
};
export const destroyAccount = () => ({
    type: DESTROY_ACCOUNT,
    data: { account: null }
});

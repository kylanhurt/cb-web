"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCOUNT = 'ACCOUNT';
exports.WALLET = 'WALLET';
exports.DESTROY_ACCOUNT = 'DESTROY_ACCOUNT';
exports.logIn = (account) => (dispatch, getState) => __awaiter(this, void 0, void 0, function* () {
    dispatch(exports.updateAccount(account));
    const firstWallet = account.getFirstWalletInfo('wallet:ethereum');
    if (firstWallet == null) {
        account.createCurrencyWallet('wallet:ethereum')
            .then(wallet => {
            dispatch(exports.updateWallet(wallet));
        })
            .catch((e) => {
            console.log('logIn error: ', e);
        });
    }
    else {
        dispatch(exports.updateWallet(firstWallet));
    }
});
exports.updateAccount = (account) => ({
    type: exports.ACCOUNT,
    data: { account }
});
exports.updateWallet = (wallet) => {
    return {
        type: exports.WALLET,
        data: { wallet }
    };
};
exports.logOut = () => (dispatch, getState) => {
    const state = getState();
    const account = state.account;
    if (account)
        account.logout();
    dispatch(exports.destroyAccount());
};
exports.destroyAccount = () => ({
    type: exports.DESTROY_ACCOUNT,
    data: { account: null }
});
//# sourceMappingURL=accountActions.js.map
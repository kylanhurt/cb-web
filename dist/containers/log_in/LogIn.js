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
const react_1 = require("react");
const edge_login_ui_web_1 = require("edge-login-ui-web");
let edgeContext; // : EdgeUiContext
edge_login_ui_web_1.makeEdgeUiContext({
    apiKey: 'aac3421135575c7433551969b28f72c5b74d7b78',
    appId: 'com.kylan.whatever',
    appName: 'CaptainsRelay'
}).then((context) => __awaiter(this, void 0, void 0, function* () {
    edgeContext = context;
    console.log('context is: ', context);
}));
class LogIn extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.onClick = () => {
            if (edgeContext) {
                edgeContext.openLoginWindow({
                    onLogin(account) {
                        console.log('account is: ', account);
                    },
                    onClose() {
                        console.log('Closing window');
                    }
                });
            }
        };
    }
    render() {
        return <button onClick={this.onClick}>Log in with Edge</button>;
    }
}
exports.default = LogIn;
// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
//# sourceMappingURL=LogIn.js.map
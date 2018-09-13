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
const react_redux_1 = require("react-redux");
const SidebarLink_1 = require("./SidebarLink");
const SidebarCategory_1 = require("./SidebarCategory");
const themeActions_1 = require("../../../redux/actions/themeActions");
const edge_login_ui_web_1 = require("edge-login-ui-web");
const accountActions_js_1 = require("../../../redux/actions/accountActions.js");
let edgeContext; // : EdgeUiContext
edge_login_ui_web_1.makeEdgeUiContext({
    apiKey: 'aac3421135575c7433551969b28f72c5b74d7b78',
    appId: 'com.CaptainsRelay.www',
    appName: 'CaptainsRelay'
}).then((context) => __awaiter(this, void 0, void 0, function* () {
    edgeContext = context;
    console.log('context is: ', context);
}));
class SidebarContent extends react_1.PureComponent {
    constructor() {
        super(...arguments);
        this.changeToDark = () => {
            this.props.changeThemeToDark();
            this.hideSidebar();
        };
        this.changeToLight = () => {
            this.props.changeThemeToLight();
            this.hideSidebar();
        };
        this.openLogin = () => {
            const { logIn } = this.props;
            if (edgeContext) {
                edgeContext.openLoginWindow({
                    onLogin(account) {
                        console.log('account is: ', account);
                        logIn(account);
                    },
                    onClose() {
                        console.log('Closing window');
                    }
                });
            }
        };
        this.hideSidebar = () => {
            this.props.onClick();
        };
    }
    render() {
        const { account, logOut } = this.props;
        const accountOptionSyntax = account ? 'Log Out' : 'Log In';
        const onPressAccount = account ? logOut : this.openLogin;
        return (<div className='sidebar__content'>
        <ul className='sidebar__block'>
          <SidebarLink_1.default title={accountOptionSyntax} icon='exit' onClick={onPressAccount}/>
          <SidebarCategory_1.default title='Layout' icon='layers'>
            <li className='sidebar__link' onClick={this.changeToLight}>
              <p className='sidebar__link-title'>Light Theme</p>
            </li>
            <li className='sidebar__link' onClick={this.changeToDark}>
              <p className='sidebar__link-title'>Dark Theme</p>
            </li>
          </SidebarCategory_1.default>
        </ul>
        <ul className='sidebar__block'>
          <SidebarCategory_1.default title='Example Pages' icon='diamond'>
            <SidebarLink_1.default title='Page one' route='/pages/one' onClick={this.hideSidebar}/>
            <SidebarLink_1.default title='Page two' route='/pages/two' onClick={this.hideSidebar}/>
          </SidebarCategory_1.default>
        </ul>
      </div>);
    }
}
const mapStateToProps = (state) => ({
    account: state.account
});
const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(accountActions_js_1.logOut()),
    logIn: (account) => dispatch(accountActions_js_1.logIn(account)),
    changeThemeToDark: () => dispatch(themeActions_1.changeThemeToDark()),
    changeThemeToLight: () => dispatch(themeActions_1.changeThemeToLight())
});
exports.SidebarContentConnector = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SidebarContent);
//# sourceMappingURL=SidebarContent.js.map
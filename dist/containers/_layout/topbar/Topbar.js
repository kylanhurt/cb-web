"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const TopbarSidebarButton_1 = require("./TopbarSidebarButton");
const TopbarProfile_1 = require("./TopbarProfile");
const TopbarMail_1 = require("./TopbarMail");
const TopbarNotification_1 = require("./TopbarNotification");
const TopbarSearch_1 = require("./TopbarSearch");
class Topbar extends react_1.PureComponent {
    render() {
        return (<div className='topbar'>
        <div className='topbar__wrapper'>
          <TopbarSidebarButton_1.default />
          <react_router_dom_1.Link className='topbar__logo' to='/'/>
          <div className='topbar__right'>
            <TopbarSearch_1.default />
            <TopbarNotification_1.default />
            <TopbarMail_1.default new/>
            <TopbarProfile_1.TopbarProfileConnector />
          </div>
        </div>
      </div>);
    }
}
exports.default = Topbar;
//# sourceMappingURL=Topbar.js.map
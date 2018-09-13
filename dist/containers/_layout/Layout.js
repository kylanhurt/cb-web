"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Topbar_1 = require("./topbar/Topbar");
const Sidebar_1 = require("./sidebar/Sidebar");
class Layout extends react_1.PureComponent {
    render() {
        return (<div>
        <Topbar_1.default />
        <Sidebar_1.default />
      </div>);
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map
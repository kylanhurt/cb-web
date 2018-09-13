"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const react_router_dom_1 = require("react-router-dom");
class TopbarMenuLinks extends react_1.PureComponent {
    render() {
        return (<react_router_dom_1.Link className='topbar__link' to={this.props.path}>
        <span className={`topbar__link-icon lnr lnr-${this.props.icon}`}/>
        <p className='topbar__link-title'>{this.props.title}</p>
      </react_router_dom_1.Link>);
    }
}
TopbarMenuLinks.propTypes = {
    title: prop_types_1.default.string.isRequired,
    icon: prop_types_1.default.string.isRequired,
    path: prop_types_1.default.string.isRequired
};
exports.default = TopbarMenuLinks;
//# sourceMappingURL=TopbarMenuLink.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const reactstrap_1 = require("reactstrap");
const react_router_dom_1 = require("react-router-dom");
class SidebarLink extends react_1.PureComponent {
    render() {
        return (<react_router_dom_1.NavLink to={this.props.route ? this.props.route : '/'} onClick={this.props.onClick} activeClassName='sidebar__link-active'>
        <li className='sidebar__link'>
          {this.props.icon ? <span className={`sidebar__link-icon lnr lnr-${this.props.icon}`}/> : ''}
          <p className='sidebar__link-title'>
            {this.props.title}
            {this.props.new ? <reactstrap_1.Badge className='sidebar__link-badge'><span>New</span></reactstrap_1.Badge> : ''}
          </p>
        </li>
      </react_router_dom_1.NavLink>);
    }
}
SidebarLink.propTypes = {
    title: prop_types_1.default.string.isRequired,
    icon: prop_types_1.default.string,
    new: prop_types_1.default.bool,
    route: prop_types_1.default.string
};
exports.default = react_router_dom_1.withRouter(SidebarLink);
//# sourceMappingURL=SidebarLink.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const prop_types_1 = require("prop-types");
class SidebarCategory extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false
        };
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        return (<div className={`sidebar__category-wrap${this.state.collapse ? ' sidebar__category-wrap--open' : ''}`}>
        <li className='sidebar__link sidebar__category' onClick={this.toggle}>
          {this.props.icon ? <span className={`sidebar__link-icon lnr lnr-${this.props.icon}`}/> : ''}
          <p className='sidebar__link-title'>{this.props.title}</p>
          <span className='sidebar__category-icon lnr lnr-chevron-right'/>
        </li>
        <reactstrap_1.Collapse isOpen={this.state.collapse} className='sidebar__submenu-wrap'>
          <ul className='sidebar__submenu'>
            <div>
              {this.props.children}
            </div>
          </ul>
        </reactstrap_1.Collapse>
      </div>);
    }
}
SidebarCategory.propTypes = {
    title: prop_types_1.default.string.isRequired,
    icon: prop_types_1.default.string
};
exports.default = SidebarCategory;
//# sourceMappingURL=SidebarCategory.js.map
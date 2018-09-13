"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_smooth_scrollbar_1 = require("react-smooth-scrollbar");
const react_router_1 = require("react-router");
const classnames_1 = require("classnames");
const SidebarContent_1 = require("./SidebarContent");
const sidebarActions_1 = require("../../../redux/actions/sidebarActions");
class Sidebar extends react_1.PureComponent {
    constructor() {
        super(...arguments);
        this.changeMobileSidebarVisibility = () => {
            this.props.dispatch(sidebarActions_1.changeMobileSidebarVisibility());
        };
    }
    render() {
        const sidebarClass = classnames_1.default({
            'sidebar': true,
            'sidebar--show': this.props.sidebar.show,
            'sidebar--collapse': this.props.sidebar.collapse
        });
        return (<div className={sidebarClass}>
        <div className='sidebar__back' onClick={this.changeMobileSidebarVisibility}/>
        <react_smooth_scrollbar_1.default className='sidebar__scroll scroll'>
          <div className='sidebar__wrapper sidebar__wrapper--desktop'>
            <SidebarContent_1.SidebarContentConnector onClick={() => {
        }}/>
          </div>
          <div className='sidebar__wrapper sidebar__wrapper--mobile'>
            <SidebarContent_1.SidebarContentConnector onClick={this.changeMobileSidebarVisibility}/>
          </div>
        </react_smooth_scrollbar_1.default>
      </div>);
    }
}
exports.default = react_router_1.withRouter(react_redux_1.connect(state => {
    return { sidebar: state.sidebar };
})(Sidebar));
//# sourceMappingURL=Sidebar.js.map
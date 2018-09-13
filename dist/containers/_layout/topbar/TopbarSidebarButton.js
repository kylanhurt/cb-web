"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const sidebarActions_1 = require("../../../redux/actions/sidebarActions");
const react_redux_1 = require("react-redux");
const icon = process.env.PUBLIC_URL + '/img/burger.svg';
class TopbarSidebarButton extends react_1.PureComponent {
    constructor() {
        super(...arguments);
        this.changeSidebarVisibility = () => {
            this.props.dispatch(sidebarActions_1.changeSidebarVisibility());
        };
        this.changeMobileSidebarVisibility = () => {
            this.props.dispatch(sidebarActions_1.changeMobileSidebarVisibility());
        };
    }
    render() {
        return (<div>
        <button className='topbar__button topbar__button--desktop' onClick={this.changeSidebarVisibility}>
          <img src={icon} alt='' className='topbar__button-icon'/>
        </button>
        <button className='topbar__button topbar__button--mobile' onClick={this.changeMobileSidebarVisibility}>
          <img src={icon} alt='' className='topbar__button-icon'/>
        </button>
      </div>);
    }
}
exports.default = react_redux_1.connect(state => {
    return { sidebar: state.sidebar };
})(TopbarSidebarButton);
//# sourceMappingURL=TopbarSidebarButton.js.map
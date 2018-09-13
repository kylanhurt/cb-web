"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
class MainWrapper extends react_1.PureComponent {
    render() {
        const theme = this.props.theme.className;
        return (<div className={theme}>
        <div className={this.props.sidebar.collapse ? 'wrapper wrapper--full-width' : 'wrapper'}>
          {this.props.children}
        </div>
      </div>);
    }
}
exports.default = react_redux_1.connect(state => {
    return { theme: state.theme,
        sidebar: state.sidebar };
})(MainWrapper);
//# sourceMappingURL=MainWrapper.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const prop_types_1 = require("prop-types");
class TableComponent extends react_1.PureComponent {
    render() {
        return (<reactstrap_1.Table className={this.props.className} striped={this.props.striped} hover={this.props.hover} responsive={this.props.responsive}>
        {this.props.children}
      </reactstrap_1.Table>);
    }
}
TableComponent.propTypes = {
    striped: prop_types_1.default.bool,
    hover: prop_types_1.default.bool,
    responsive: prop_types_1.default.bool,
    className: prop_types_1.default.string
};
exports.default = TableComponent;
//# sourceMappingURL=Table.js.map
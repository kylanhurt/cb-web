"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const ExampleCard_1 = require("./components/ExampleCard");
class ExamplePage extends react_1.PureComponent {
    render() {
        return (<reactstrap_1.Container className='dashboard'>
        <reactstrap_1.Row>
          <reactstrap_1.Col md={12}>
            <h3 className='page-title'>Example Page One</h3>
          </reactstrap_1.Col>
        </reactstrap_1.Row>
        <reactstrap_1.Row>
          <ExampleCard_1.default />
        </reactstrap_1.Row>
      </reactstrap_1.Container>);
    }
}
exports.default = ExamplePage;
//# sourceMappingURL=ExamplePageOne.js.map
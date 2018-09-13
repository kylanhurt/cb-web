"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
class ExampleCard extends react_1.PureComponent {
    render() {
        return (<reactstrap_1.Col md={12}>
        <reactstrap_1.Card>
          <reactstrap_1.CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Example title</h5>
              <h5 className='subhead'>Example subhead</h5>
            </div>
            <p>
              Your content here
            </p>
          </reactstrap_1.CardBody>
        </reactstrap_1.Card>
      </reactstrap_1.Col>);
    }
}
exports.default = ExampleCard;
//# sourceMappingURL=ExampleCard.js.map
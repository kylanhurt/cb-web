"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const SubmitBuyOrderConnector_js_1 = require("../../redux/connectors/SubmitBuyOrderConnector.js");
const OrderBookConnector_js_1 = require("../../redux/connectors/OrderBookConnector.js");
class HomepageComponent extends react_1.Component {
    render() {
        return (<reactstrap_1.Container className='dashboard'>
        <reactstrap_1.Row>
          <reactstrap_1.Col xs={12} md={12} lg={12} xl={12}>
            <h3 className='page-title'>Dashboard</h3>
          </reactstrap_1.Col>
        </reactstrap_1.Row>
        <reactstrap_1.Row>
          <reactstrap_1.Col xs={12} md={12} lg={12} xl={6}>
            <reactstrap_1.Card>
              <reactstrap_1.CardBody className='trade-currencies-form'>
                <SubmitBuyOrderConnector_js_1.SubmitBuyOrderConnector />
              </reactstrap_1.CardBody>
            </reactstrap_1.Card>
          </reactstrap_1.Col>
          <reactstrap_1.Col xs={12} md={12} lg={12} xl={6}>
            <reactstrap_1.Card>
              <reactstrap_1.CardBody className='order-book-table'>
                <OrderBookConnector_js_1.OrderBookConnector />
              </reactstrap_1.CardBody>
            </reactstrap_1.Card>
          </reactstrap_1.Col>
        </reactstrap_1.Row>
      </reactstrap_1.Container>);
    }
}
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=Homepage.js.map
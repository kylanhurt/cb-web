"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Layout_1 = require("../containers/_layout/Layout");
const MainWrapper_1 = require("./MainWrapper");
const LogIn_1 = require("../containers/log_in/LogIn");
const ExamplePageOne_1 = require("../containers/example/ExamplePageOne");
const ExamplePageTwo_1 = require("../containers/example_two/ExamplePageTwo");
const HomepageConnector_js_1 = require("../redux/connectors/HomepageConnector.js");
const Router = () => (<MainWrapper_1.default>
    <main>
      <react_router_dom_1.Switch>
        <react_router_dom_1.Route exact path='/log_in' component={LogIn_1.default}/>
        <react_router_dom_1.Route path='/' component={wrappedRoutes}/>
      </react_router_dom_1.Switch>
    </main>
  </MainWrapper_1.default>);
const wrappedRoutes = () => (<div>
    <Layout_1.default />
    <div className='container__wrap'>
      <react_router_dom_1.Route exact path='/' component={HomepageConnector_js_1.HomepageConnector}/>
      <react_router_dom_1.Route path='/pages' component={Pages}/>
    </div>
  </div>);
const Pages = () => (<react_router_dom_1.Switch>
    <react_router_dom_1.Route exact path='/' component={HomepageConnector_js_1.HomepageConnector}/>
    <react_router_dom_1.Route path='/pages/one' component={ExamplePageOne_1.default}/>
    <react_router_dom_1.Route path='/pages/two' component={ExamplePageTwo_1.default}/>
  </react_router_dom_1.Switch>);
exports.default = Router;
//# sourceMappingURL=Router.js.map
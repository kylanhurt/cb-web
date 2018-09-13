"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const App_1 = require("./app/App");
const react_dom_1 = require("react-dom");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const store_1 = require("./app/store");
const ScrollToTop_1 = require("./app/ScrollToTop");
react_dom_1.render(<react_redux_1.Provider store={store_1.default}>
    <react_router_dom_1.BrowserRouter basename='/'>
      <ScrollToTop_1.default>
        <App_1.default />
      </ScrollToTop_1.default>
    </react_router_dom_1.BrowserRouter>
  </react_redux_1.Provider>, document.getElementById('root'));
//# sourceMappingURL=index.js.map
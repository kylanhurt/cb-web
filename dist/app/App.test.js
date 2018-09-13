"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const App_1 = require("./App");
it('renders without crashing', () => {
    const div = document.createElement('div');
    react_dom_1.default.render(<App_1.default />, div);
    react_dom_1.default.unmountComponentAtNode(div);
});
//# sourceMappingURL=App.test.js.map
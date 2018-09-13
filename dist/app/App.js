"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("bootstrap/dist/css/bootstrap.css");
require("../scss/app.scss");
const Router_1 = require("./Router");
class App extends react_1.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            loaded: false
        };
    }
    componentDidMount() {
        window.addEventListener('load', () => {
            this.setState({ loading: false });
            setTimeout(() => this.setState({ loaded: true }), 500);
        });
    }
    render() {
        const loaded = this.state.loaded;
        return (<div>
        {!loaded && <div className={`load${this.state.loading ? '' : ' loaded'}`}>
          <div className='load__icon-wrap'>
            <svg className='load__icon'>
              <path fill='#4ce1b6' d='M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z'/>
            </svg>
          </div>
        </div>}
        <div>
          <Router_1.default />
        </div>
      </div>);
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const TextField_1 = require("@material-ui/core/TextField");
const SearchIcon_1 = require("mdi-react/SearchIcon");
class TopbarSearch extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.state = { inputOpen: false };
        this.onInputOpen = this.onInputOpen.bind(this);
    }
    onInputOpen(e) {
        e.preventDefault();
        this.setState({ inputOpen: !this.state.inputOpen });
    }
    render() {
        return (<form className='topbar__search material-form'>
        <TextField_1.default className={`material-form__field topbar__search-field${this.state.inputOpen ? ' topbar__search-field--open' : ''}`}/>
        <button className='topbar__btn' onClick={this.onInputOpen}>
          <SearchIcon_1.default />
        </button>
      </form>);
    }
}
exports.default = TopbarSearch;
//# sourceMappingURL=TopbarSearch.js.map
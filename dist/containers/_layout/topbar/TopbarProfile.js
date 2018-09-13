"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const ChevronDownIcon_1 = require("mdi-react/ChevronDownIcon");
const TopbarMenuLink_1 = require("./TopbarMenuLink");
const reactstrap_1 = require("reactstrap");
const Ava = process.env.PUBLIC_URL + '/img/ava.png';
class TopbarProfile extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        const { account } = this.props;
        return (<div className='topbar__profile'>
        {account ? (<div className='topbar__avatar' onClick={this.toggle}>
            <img className='topbar__avatar-img' src={Ava} alt='avatar'/>
            <p className='topbar__avatar-name'>{account.username}</p>
            <ChevronDownIcon_1.default className='topbar__avatar-icon'/>
          </div>) : (<div className='topbar__avatar'>
            <a className='topbar__avatar-name'>Log in</a>
          </div>)}
        {this.state.collapse && <div className='topbar__back' onClick={this.toggle}/>}
        <reactstrap_1.Collapse isOpen={this.state.collapse} className='topbar__menu-wrap'>
          <div className='topbar__menu'>
            <TopbarMenuLink_1.default title='Page One' icon='user' path='/pages/one'/>
            <TopbarMenuLink_1.default title='Page Two' icon='calendar-full' path='/pages/two'/>
            <div className='topbar__menu-divider'/>
            <TopbarMenuLink_1.default title='Log Out' icon='exit' path='/log_in'/>
          </div>
        </reactstrap_1.Collapse>
      </div>);
    }
}
const mapStateToProps = (state) => ({
    account: state.account
});
const mapDispatchToProps = (dispatch) => ({});
exports.TopbarProfileConnector = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TopbarProfile);
//# sourceMappingURL=TopbarProfile.js.map
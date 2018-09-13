"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const reactstrap_1 = require("reactstrap");
const MailIcon_1 = require("mdi-react/MailIcon");
const notifications = [];
class TopbarMail extends react_1.PureComponent {
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
        return (<div className='topbar__collapse'>
        <button className='topbar__btn topbar__btn--mail topbar__btn--new' onClick={this.toggle}>
          <MailIcon_1.default />
          <div className='topbar__btn-new-label'>
            <div />
          </div>
        </button>
        {this.state.collapse && <div className='topbar__back' onClick={this.toggle}/>}
        <reactstrap_1.Collapse isOpen={this.state.collapse} className='topbar__collapse-content'>
          <div className='topbar__collapse-title-wrap'>
            <p className='topbar__collapse-title'>Unread messages</p>
            <button className='topbar__collapse-button'>Mark all as read</button>
          </div>
          {notifications.map((notification) => (<div className='topbar__collapse-item' key={notification.name}>
              <div className='topbar__collapse-img-wrap'>
                <img className='topbar__collapse-img' src={notification.ava} alt=''/>
              </div>
              <p className='topbar__collapse-name'>{notification.name}</p>
              <p className='topbar__collapse-message topbar__collapse-message--mail'>{notification.message}</p>
              <p className='topbar__collapse-date'>{notification.date}</p>
            </div>))}
          <react_router_dom_1.Link className='topbar__collapse-link' to='/mail'>
            See all messages
          </react_router_dom_1.Link>
        </reactstrap_1.Collapse>
      </div>);
    }
}
exports.default = TopbarMail;
//# sourceMappingURL=TopbarMail.js.map
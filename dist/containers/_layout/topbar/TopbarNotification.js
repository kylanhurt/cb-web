"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const react_router_dom_1 = require("react-router-dom");
const NotificationsIcon_1 = require("mdi-react/NotificationsIcon");
const notifications = [];
class TopbarNotification extends react_1.PureComponent {
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
        <button className='topbar__btn' onClick={this.toggle}>
          <NotificationsIcon_1.default />
        </button>
        {this.state.collapse && <div className='topbar__back' onClick={this.toggle}/>}
        <reactstrap_1.Collapse isOpen={this.state.collapse} className='topbar__collapse-content'>
          <div className='topbar__collapse-title-wrap'>
            <p className='topbar__collapse-title'>Notifications</p>
            <button className='topbar__collapse-button'>Mark all as read</button>
          </div>
          {notifications.map((notification) => (<div className='topbar__collapse-item' key={notification.name}>
              <div className='topbar__collapse-img-wrap'>
                <img className='topbar__collapse-img' src={notification.ava} alt=''/>
              </div>
              <p className='topbar__collapse-message'>
                <span className='topbar__collapse-name'>{notification.name}</span>
                {notification.message}
              </p>
              <p className='topbar__collapse-date'>{notification.date}</p>
            </div>))}
          <react_router_dom_1.Link className='topbar__collapse-link' to='/dashboard_default'>
            See all notifications
          </react_router_dom_1.Link>
        </reactstrap_1.Collapse>
      </div>);
    }
}
exports.default = TopbarNotification;
//# sourceMappingURL=TopbarNotification.js.map
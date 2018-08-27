import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import NotificationSystem from 'rc-notification';
import BasicNotifications from './components/BasicNotifications';
import ImageNotifications from './components/ImageNotifications';
import ColorStates from './components/ColorStates';
import ColorStatesFullWidth from './components/ColorStatesFullWidth';

let notificationLU = null;
let notificationRU = null;
let notificationTC = null;

const showNotification = ({notification, position}) => {
  switch(position){
    case 'left-up':
      notificationLU.notice({
        content: notification,
        duration: 5,
        closable: true,
        style: {top: 0, left: 240},
        className: position
      });
      break;
    case 'right-up':
      notificationRU.notice({
        content: notification,
        duration: 5,
        closable: true,
        style: {top: 0, left: 'calc(100vw - 100%)'},
        className: position
      });
      break;
    default:
      notificationTC.notice({
        content: notification,
        duration: 5,
        closable: true,
        style: {top: 0, left: 0},
        className: position
      });
      break;
  }
};

export default class Notifications extends PureComponent {
  componentDidMount() {
    NotificationSystem.newInstance({}, (n) => notificationLU = n);
    NotificationSystem.newInstance({}, (n) => notificationRU = n);
    NotificationSystem.newInstance({}, (n) => notificationTC = n);
  };
  componentWillUnmount() {
    notificationLU.destroy();
    notificationRU.destroy();
    notificationTC.destroy();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Notifications</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <BasicNotifications showNotification={showNotification}/>
          <ImageNotifications showNotification={showNotification}/>
          <ColorStates showNotification={showNotification}/>
          <ColorStatesFullWidth showNotification={showNotification}/>
        </Row>
      </Container>
    )
  }
}

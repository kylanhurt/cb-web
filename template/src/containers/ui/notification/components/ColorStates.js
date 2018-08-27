import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Card, CardBody, Col} from 'reactstrap';
import PropTypes from 'prop-types';
import {BasicNotification} from '../../../../components/Notification';

export default class ColorStates extends PureComponent {
  static propTypes = {
    showNotification: PropTypes.func.isRequired,
  };

  show = (color) => {
    this.props.showNotification({
      notification: <BasicNotification color={color} title='Alert panel divider'
                                       message='Learning day desirous informed expenses material returned six the.
                                       She enabled invited exposed him another.'
      />,
      position: 'right-up'
    });
  };

  render() {
    return (
      <Col md={12} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Color States</h5>
              <h5 className='subhead'>Use BasicNotification with class <span className='red-text'>primary</span>, <span
                className='red-text'>success</span>, <span className='red-text'>warning</span>, <span
                className='red-text'>danger</span></h5>
            </div>
            <ButtonToolbar>
              <Button color='primary' onClick={() => this.show('primary')}>Primary</Button>
              <Button color='success' onClick={() => this.show('success')}>Success</Button>
              <Button color='warning' onClick={() => this.show('warning')}>Warning</Button>
              <Button color='danger' onClick={() => this.show('danger')}>Danger</Button>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
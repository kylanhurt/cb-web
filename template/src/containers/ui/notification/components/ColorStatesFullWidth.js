import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Card, CardBody, Col} from 'reactstrap';
import PropTypes from 'prop-types';
import {FullWideNotification} from '../../../../components/Notification';


export default class ColorStatesFullWidth extends PureComponent {
  static propTypes = {
    showNotification: PropTypes.func.isRequired,
  };

  show = (color) => {
    this.props.showNotification({
      notification: <FullWideNotification color={color}
                                          message='Learning day desirous informed expenses material returned six the.
                                        She enabled invited exposed him another.'
      />,
      position: 'full'
    });
  };
  render() {
    return (
      <Col md={12} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Color States full width</h5>
              <h5 className='subhead'>Use FullWideNotification with color: <span className='red-text'>primary</span>,
                <span className='red-text'>success</span>, <span className='red-text'>warning</span>,
                <span className='red-text'>danger</span></h5>
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
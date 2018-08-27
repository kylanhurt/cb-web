import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Card, CardBody, Col} from 'reactstrap';
import PropTypes from 'prop-types';
import {ImageNotification} from '../../../../components/Notification';

const image = process.env.PUBLIC_URL + '/img/photo_notification.png';

export default class ImageNotifications extends PureComponent {
  static propTypes = {
    showNotification: PropTypes.func.isRequired,
  };

  show = (position) => {
    this.props.showNotification({
      notification: <ImageNotification title='Lora Simpson' img={image}
                                       message='Learning day desirous informed expenses material returned
                                       six the. She enabled …'
      />,
      position: position
    });
  };

  render() {
    return (
      <Col md={12} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Image notifications</h5>
              <h5 className='subhead'>Use ImageNotification with necessary value of properties <span
                className='red-text'>position</span> and <span className='red-text'>img</span></h5>
            </div>
            <ButtonToolbar>
              {/*<Notification title='Lora Simpson' position='tl' img={Image}*/}
                            {/*message='Learning day desirous informed expenses material returned six the. She enabled...'>*/}
              <Button outline onClick={() => this.show('left-up')}>Left Up</Button>
              {/*<Button outline onClick={() => this.show('left-down')}>Left Down</Button>*/}
              <Button outline onClick={() => this.show('right-up')}>Right Up</Button>
              {/*<Button outline onClick={() => this.show('right-down')}>Right Down</Button>*/}
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
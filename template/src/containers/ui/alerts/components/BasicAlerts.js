import React, {PureComponent} from 'react';
import Alert from '../../../../components/Alert';
import {Card, CardBody, Col} from 'reactstrap';

export default class BasicAlerts extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Basic alerts</h5>
              <h5 className='subhead'>Basic configuration of alert</h5>
            </div>
            <Alert color='info'>
              <p><span className='bold-text'>Information:</span> Learning day desirous informed expenses material
                returned six the.
                She enabled invited exposed him another.</p>
            </Alert>
            <Alert color='success'>
              <p><span className='bold-text'>Congratulations!</span> Learning day desirous informed expenses
                material returned six the. She enabled invited exposed him another.</p>
            </Alert>
            <Alert color='warning'>
              <p><span className='bold-text'>Attention!</span> Learning day desirous informed
                expenses material returned six the. She enabled invited exposed him another.</p>
            </Alert>
            <Alert color='danger'>
              <p><span className='bold-text'>Warning!</span> Learning day desirous informed expenses
                material returned six the. She enabled invited exposed him another.</p>
            </Alert>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
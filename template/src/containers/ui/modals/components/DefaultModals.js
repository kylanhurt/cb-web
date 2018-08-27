import React, {PureComponent} from 'react';
import {ButtonToolbar, Card, CardBody, Col} from 'reactstrap';
import Modal from '../../../../components/Modal';

export default class DefaultModals extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6} xl={4} xs={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Default Modals</h5>
              <h5 className='subhead'>Use default modal</h5>
            </div>
            <ButtonToolbar>
              <Modal color='primary' title='Congratulations!' btn='Default'
                     message='Expect warmly its tended garden him esteem had remove off. Effects dearest staying
                   now sixteen nor improve.'/>
              <Modal color='success' title='Well Done!' btn='Success'
                     message='Expect warmly its tended garden him esteem had remove off. Effects dearest staying
                   now sixteen nor improve.'/>
              <Modal color='warning' title='Attention!' btn='Warning'
                     message='Expect warmly its tended garden him esteem had remove off. Effects dearest staying
                   now sixteen nor improve.'/>
              <Modal color='danger' title='Stop!' btn='Danger'
                     message='Expect warmly its tended garden him esteem had remove off. Effects dearest staying
                   now sixteen nor improve.'/>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
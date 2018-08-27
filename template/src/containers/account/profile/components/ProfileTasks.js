import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Badge} from 'reactstrap';
import CheckIcon from 'mdi-react/CheckIcon';
import PropTypes from 'prop-types';

// import CheckBox from '../../../../components/form/CheckBox';

class CheckBox extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
  };
  
  render() {
    return (
      <label
        className='checkbox-btn profile__current-task-checkbox'>
        <input className='checkbox-btn__checkbox' type='checkbox' defaultChecked={this.props.checked}/>
        <span className='checkbox-btn__checkbox-custom'>
          <CheckIcon/>
        </span>
      </label>
    )
  }
}

export default class ProfileMain extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody className='profile__card'>
            <p className='profile__current-tasks-title'>Current tasks <span>12</span></p>
            <div className='profile__current-tasks'>
              <div className='profile__current-task'>
                <CheckBox/>
                Create screens of Mobile App
                <Badge color='info'>New</Badge>
              </div>
              <div className='profile__current-task'>
                <CheckBox checked/>
                Write Cris about the bag report
              </div>
              <div className='profile__current-task'>
                <CheckBox/>
                Test new system of versions control
                <Badge color='error'>Priority</Badge>
              </div>
              <div className='profile__current-task'>
                <CheckBox/>
                Design new layout for message page in Partnership project
              </div>
              <div className='profile__current-task'>
                <CheckBox/>
                Test new system of versions control
                <Badge color='error'>Priority</Badge>
              </div>
              <div className='profile__current-task'>
                <CheckBox/>
                Design new layout for message page in Partnership project
              </div>
              <a href='' className='profile__see-all-tasks'>See all tasks</a>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
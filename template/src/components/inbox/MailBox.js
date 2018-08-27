import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Badge} from 'reactstrap';

export default class MailBox extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number,
    selected: PropTypes.bool
  };
  
  render() {
    return (
      <div className={`inbox__mailbox${this.props.selected ? ' active' : ''}`}>
        {this.props.children}
        <p className='inbox__mailbox-title'>{this.props.title}</p>
        {this.props.amount ? <Badge className='inbox__mailbox-label'>{this.props.amount}</Badge> : ''}
      </div>
    )
  }
}
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonToolbar} from 'reactstrap';

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';
import StarIcon from 'mdi-react/StarIcon';
import ReplyIcon from 'mdi-react/ReplyIcon';
import DeleteIcon from 'mdi-react/DeleteIcon';
import PrinterIcon from 'mdi-react/PrinterIcon';
import PaperclipIcon from 'mdi-react/PaperclipIcon';
import CloseIcon from 'mdi-react/CloseIcon';

export default class Email extends PureComponent {
  static propTypes = {
    email: PropTypes.object,
    onReply: PropTypes.func,
    onBack: PropTypes.func
  };
  
  constructor(props) {
    super(props);
    this.state = {
      quickReply: false,
    };
    
    this.onQuickReply = this.onQuickReply.bind(this);
    this.onQuickReplyClose = this.onQuickReplyClose.bind(this);
  }
  
  onQuickReply() {
    this.setState({quickReply: true})
  }
  
  onQuickReplyClose() {
    this.setState({quickReply: false})
  }
  
  render() {
    return (
      <div className='inbox__email inbox__content'>
        <div className='inbox__email-header'>
          <div className='inbox__email-left'>
          <button className='inbox__email-back' onClick={this.props.onBack}><ArrowLeftIcon/></button>
          <div className='inbox__email-ava'>
            <img src={this.props.email.ava} alt=''/>
          </div>
          <div className='inbox__email-info'>
            <h5 className='inbox__email-name'>{this.props.email.name}
              <StarIcon className={`inbox__favorite${this.props.email.favorite ? ' active' : ''}`}/>
            </h5>
            <p className='inbox__email-email'>{this.props.email.email}</p>
          </div>
          </div>
          <div className='inbox__email-right'>
            <p className='inbox__email-time'>{this.props.email.time}</p>
            <button className='inbox__email-btn' onClick={this.props.onReply}><ReplyIcon/></button>
            <button className='inbox__email-btn'><DeleteIcon/></button>
            <button className='inbox__email-btn'><PrinterIcon/></button>
          </div>
        </div>
        <div className='inbox__email-body'>
          {this.props.email.body}
        </div>
        {this.props.email.attachment ?
          <div className='inbox__email-attachment'>
            <h5 className='inbox__email-attachment-title'>Attachment (2 file 12Mb):</h5>
            {this.props.email.attachment.map((a, i) =>
              <div key={i} className='inbox__email-attachment-link'>
                <PaperclipIcon/><a href={a.link} download>{a.name} ({a.size})</a>
              </div>
            )}
          </div> : ''
        }
        <div className='inbox__email-reply'>
          <textarea className='inbox__email-reply-textarea' onFocus={this.onQuickReply}/>
          {!this.state.quickReply ?
            <p className='inbox__email-reply-placeholder'>Click here to <span>reply</span></p>
            :
            <div>
              <button className='inbox__email-reply-close' onClick={this.onQuickReplyClose}>
                <CloseIcon/>
              </button>
              <ButtonToolbar className='inbox__email-reply-btns'>
                <Button size='sm' color='primary'>Send</Button>
                <button className='inbox__email-reply-btn-full' onClick={this.props.onReply}>
                  Go to full answer form
                </button>
              </ButtonToolbar>
            </div>
          }
        </div>
      </div>
    )
  }
}
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MenuIcon from 'mdi-react/MenuIcon';
import MoreVertIcon from 'mdi-react/MoreVertIcon';
import VideoIcon from 'mdi-react/VideoIcon';
import PhoneIcon from 'mdi-react/PhoneIcon';
import StarIcon from 'mdi-react/StarIcon';

export default class ChatTopbar extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    contact: PropTypes.object
  };

  render() {
    const {contact, onClick} = this.props;

    return (
      <div className='chat__topbar'>
        <button className='chat__topbar-button chat__topbar-button--menu' onClick={onClick}>
          <MenuIcon className='chat__topbar-button-icon'/>
        </button>
        {contact &&
          <div className='chat__topbar-contact'>
            <p className='chat__topbar-contact-name'>{contact.name}</p>
            <p className='chat__topbar-contact-post'>{contact.post}</p>
          </div> }
        <div className='chat__topbar-right'>
          {contact &&
            <div className='chat__topbar-controls'>
              <button className='chat__topbar-button'>
                <VideoIcon className='chat__topbar-button-icon'/>
              </button>
              <button className='chat__topbar-button'>
                <PhoneIcon className='chat__topbar-button-icon'/>
              </button>
              <button className='chat__topbar-button'>
                <StarIcon className='chat__topbar-button-icon'/>
              </button>
            </div>
          }
          <button className='chat__topbar-button'>
            <MoreVertIcon className='chat__topbar-button-icon'/>
          </button>
        </div>
      </div>
    )
  }
}

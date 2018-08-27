import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Scrollbar from 'react-smooth-scrollbar';
import classNames from 'classnames';
import ChatContact from './ChatContact';
import ChatBubble from './ChatBubble';
import ChatSearch from './ChatSearch';
import ChatField from './ChatField';
import ChatTopbar from './ChatTopbar';

export default class Chat extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    contacts: PropTypes.array
  };

  state = {
    currentMessages: this.props.contacts[0].messages,
    currentChat: this.props.contacts[0].userName,
    openContacts: false
  };

  onOpenChat = (contact, e) => {
    e.preventDefault();
    const dialog = this.props.contacts.find((c) => c.userName === contact).messages;
    console.log('dialog', dialog);
    const messages = dialog ? dialog : null;
    this.setState({
      currentChat: contact,
      currentMessages: messages,
      openContacts: false
    });
  };

  onOpenContacts = () => {
    this.setState({openContacts: !this.state.openContacts});
  };

  render(){
    const {currentUser, contacts} = this.props;
    let chatClass = classNames({
      'chat': true,
      'chat--open': this.state.openContacts
    });

    let contactsClass = classNames({
      'chat__contact-list': true,
      'chat__contact-list--open': this.state.openContacts
    });

    return (
      <div className={chatClass}>
        <div className={contactsClass}>
          <ChatSearch/>
          <div className='chat__contacts'>
            <Scrollbar className='scroll chat__contacts-scroll' alwaysShowTracks>
              {contacts.map((c, i) =>
                <a key={i} onClick={(e) => this.onOpenChat(c.userName, e)}>
                  <ChatContact active={c.userName === this.state.currentChat} contact={c}/>
                </a>
              )}
            </Scrollbar>
          </div>
        </div>
        {this.state.currentChat === null ?
          <div className='chat__dialog'>
            <ChatTopbar onClick={this.onOpenContacts}/>
            <div className='chat__dialog-select-message'>
              <p>Select a chat to start messaging</p>
            </div>
          </div>
          :
          <div className='chat__dialog'>
            <ChatTopbar contact={contacts.find((c) => c.userName === this.state.currentChat)}
                        onClick={this.onOpenContacts}/>
            <Scrollbar className='scroll chat__scroll' alwaysShowTracks>
              <div className='chat__dialog-messages-wrap'>
                {this.state.currentMessages === null || this.state.currentMessages.length === 0 ?
                  <div className='chat__dialog-messages'>
                    <div className='chat__dialog-messages-empty'>
                      <p>No messages</p>
                    </div>
                  </div>
                  :
                  <div className='chat__dialog-messages'>
                    {this.state.currentMessages.map((m, i) =>
                      <ChatBubble key={i}
                                  contact={m.userName === currentUser.userName ? currentUser :
                                    contacts.find((c) => c.userName === m.userName)}
                                  message={m}
                                  date={m}
                                  active={m.userName === currentUser.userName}/>
                    )}
                  </div>
                }
              </div>
            </Scrollbar>
            <ChatField/>
          </div>
        }
      </div>
    )
  }
};

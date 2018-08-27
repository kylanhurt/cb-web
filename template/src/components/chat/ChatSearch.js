import React, {PureComponent} from 'react';
import MagnifyIcon from 'mdi-react/MagnifyIcon';

export default class ChatSearch extends PureComponent {
  render() {
    return (
      <div className='chat__search'>
        <input className='chat__search-input' placeholder='Search'/>
        <MagnifyIcon/>
      </div>
    )
  }
}
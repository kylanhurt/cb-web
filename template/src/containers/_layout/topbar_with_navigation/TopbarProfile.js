import React, {PureComponent} from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import TopbarMenuLink from './TopbarMenuLink';
import {DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown} from 'reactstrap';

const Ava = process.env.PUBLIC_URL + '/img/ava.png';

export default class TopbarProfile extends PureComponent {
  render() {
    return (
      <UncontrolledDropdown className='topbar__profile'>
        <DropdownToggle className='topbar__avatar'>
          <img className='topbar__avatar-img' src={Ava} alt='avatar'/>
          <p className='topbar__avatar-name'>Roman Johanson</p>
          <DownIcon className='topbar__avatar-icon'/>
        </DropdownToggle>
        <DropdownMenu className='topbar__menu dropdown__menu'>
          <DropdownItem>
            <TopbarMenuLink title='My Profile' icon='user' path='/account/profile'/>
          </DropdownItem>
          <DropdownItem>
            <TopbarMenuLink title='Calendar' icon='calendar-full' path='/default_pages/calendar'/>
          </DropdownItem>
          <DropdownItem>
            <TopbarMenuLink title='Tasks' icon='list' path='/default_pages/calendar'/>
          </DropdownItem>
          <DropdownItem>
            <TopbarMenuLink title='Inbox' icon='inbox' path='/mail'/>
          </DropdownItem>
          <DropdownItem divider className='topbar__menu-divider'/>
          <DropdownItem>
            <TopbarMenuLink title='Account Settings' icon='cog' path='/account/profile'/>
          </DropdownItem>
          <DropdownItem>
            <TopbarMenuLink title='Lock Screen' icon='lock' path='/lock_screen'/>
          </DropdownItem>
          <DropdownItem>
            <TopbarMenuLink title='Log Out' icon='exit' path='/log_in'/>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
}

import React, {PureComponent} from 'react';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';
import TopbarMail from './TopbarMail';
import TopbarNotification from './TopbarNotification';
import TopbarSearch from './TopbarSearch';
import {Link} from 'react-router-dom';

export default class Topbar extends PureComponent {
  render() {
    return (
      <div className='topbar'>
        <div className='topbar__wrapper'>
          <div className='topbar__left'>
            <TopbarSidebarButton/>
            <Link className='topbar__logo' to='/dashboard_default'/>
          </div>
          <div className='topbar__right'>
            <TopbarSearch/>
            <TopbarNotification/>
            <TopbarMail new/>
            <TopbarProfile/>
          </div>
        </div>
      </div>
    )
  }
}
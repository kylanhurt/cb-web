import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';
import TopbarMail from './TopbarMail';
import TopbarNotification from './TopbarNotification';
import TopbarNav from './tobar_nav/TopbarNav';

export default class TopbarWithNavigation extends PureComponent {
  render() {
    return (
      <div className='topbar topbar--navigation'>
        <div className='topbar__wrapper'>
          <div className='topbar__left'>
            <TopbarSidebarButton/>
            <Link className='topbar__logo' to='/dashboard_default'/>
          </div>
          <TopbarNav/>
          <div className='topbar__right'>
            <TopbarNotification/>
            <TopbarMail new/>
            <TopbarProfile/>
          </div>
        </div>
      </div>
    )
  }
}
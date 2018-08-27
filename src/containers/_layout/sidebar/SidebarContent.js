import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import {changeThemeToDark, changeThemeToLight} from '../../../redux/actions/themeActions';

class SidebarContent extends PureComponent {
  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
    this.hideSidebar();
  };
  
  changeToLight = () => {
    this.props.dispatch(changeThemeToLight());
    this.hideSidebar();
  };
  
  hideSidebar = () => {
    this.props.onClick();
  };
  
  render() {
    return (
      <div className='sidebar__content'>
        <ul className='sidebar__block'>
          <SidebarLink title='Log In' icon='exit' route='/log_in' onClick={this.hideSidebar}/>
          <SidebarCategory title='Layout' icon='layers'>
            <li className='sidebar__link' onClick={this.changeToLight}>
              <p className='sidebar__link-title'>Light Theme</p>
            </li>
            <li className='sidebar__link' onClick={this.changeToDark}>
              <p className='sidebar__link-title'>Dark Theme</p>
            </li>
          </SidebarCategory>
        </ul>
        <ul className='sidebar__block'>
          <SidebarCategory title='Example Pages' icon='diamond'>
            <SidebarLink title='Page one' route='/pages/one' onClick={this.hideSidebar}/>
            <SidebarLink title='Page two' route='/pages/two' onClick={this.hideSidebar}/>
          </SidebarCategory>
        </ul>
      </div>
    )
  }
}

export default connect()(SidebarContent);
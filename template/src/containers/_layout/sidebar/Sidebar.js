import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Scrollbar from 'react-smooth-scrollbar';
import {withRouter} from 'react-router';
import classNames from 'classnames';
import SidebarContent from './SidebarContent';
import {changeMobileSidebarVisibility} from '../../../redux/actions/sidebarActions';

class Sidebar extends PureComponent {
  
  changeMobileSidebarVisibility = () => {
    this.props.dispatch(changeMobileSidebarVisibility());
  };
  
  render() {
    let sidebarClass = classNames({
      'sidebar': true,
      'sidebar--show': this.props.sidebar.show,
      'sidebar--collapse': this.props.sidebar.collapse
    });
    
    return (
      <div className={sidebarClass}>
        <div className='sidebar__back' onClick={this.changeMobileSidebarVisibility}/>
        <Scrollbar className='sidebar__scroll scroll'>
          <div className='sidebar__wrapper sidebar__wrapper--desktop'>
            <SidebarContent onClick={() => {
            }}/>
          </div>
          <div className='sidebar__wrapper sidebar__wrapper--mobile'>
            <SidebarContent onClick={this.changeMobileSidebarVisibility}/>
          </div>
        </Scrollbar>
      </div>
    )
  }
}

export default withRouter(connect(state => {
  return {sidebar: state.sidebar};
})(Sidebar));
import React, {PureComponent} from 'react';
import {changeMobileSidebarVisibility} from '../../../redux/actions/sidebarActions';
import {connect} from 'react-redux';

const icon = process.env.PUBLIC_URL + '/img/burger.svg';

class TopbarSidebarButton extends PureComponent {
  
  changeMobileSidebarVisibility = () => {
    this.props.dispatch(changeMobileSidebarVisibility());
  };
  
  render() {
    return (
      <div>
        <button className='topbar__button topbar__button--mobile' onClick={this.changeMobileSidebarVisibility}>
          <img src={icon} alt='' className='topbar__button-icon'/>
        </button>
      </div>
    )
  }
}

export default connect(state => {
  return {sidebar: state.sidebar};
})(TopbarSidebarButton);

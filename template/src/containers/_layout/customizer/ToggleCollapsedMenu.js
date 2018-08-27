import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {changeSidebarVisibility} from '../../../redux/actions/sidebarActions';

class ToggleCollapsedMenu extends PureComponent {
  
  handleClick = () => {
    this.props.dispatch(changeSidebarVisibility());
  };
  
  render() {
    return (
      <label className='toggle-btn customizer__toggle'>
        <input className='toggle-btn__input' type='checkbox' name='collapse_toggle'
               checked={this.props.sidebar.collapse}/>
        <label className='toggle-btn__input-label' htmlFor='collapse_toggle'
               onClick={this.handleClick}>Toggle</label>
        <span>Collapsed Menu</span>
      </label>
    )
  }
}

export default connect(state => {
  return {
    sidebar: state.sidebar
  };
})(ToggleCollapsedMenu);
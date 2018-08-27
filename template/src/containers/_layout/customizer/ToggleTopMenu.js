import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {toggleTopNavigation} from '../../../redux/actions/customizerActions';

class ToggleShadow extends PureComponent {
  
  handleClick = () => {
    this.props.dispatch(toggleTopNavigation());
  };
  
  render() {
    return (
      <label className='toggle-btn customizer__toggle'>
        <input className='toggle-btn__input' type='checkbox' name='top_menu_toggle'
               checked={this.props.customizer.topNavigation}/>
        <label className='toggle-btn__input-label' htmlFor='top_menu_toggle'
               onClick={this.handleClick}>Toggle</label>
        <span>Top Menu</span>
      </label>
    )
  }
}

export default connect(state => {
  return {
    customizer: state.customizer
  };
})(ToggleShadow);
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {toggleBoxShadow} from '../../../redux/actions/customizerActions';

class ToggleShadow extends PureComponent {
  
  handleClick = () => {
    this.props.dispatch(toggleBoxShadow());
  };
  
  render() {
    return (
      <label className='toggle-btn customizer__toggle'>
        <input className='toggle-btn__input' type='checkbox' name='shadow_toggle'
               checked={this.props.customizer.withBoxShadow}/>
        <label className='toggle-btn__input-label' htmlFor='shadow_toggle'
               onClick={this.handleClick}>Toggle</label>
        <span>Block's Shadows</span>
      </label>
    )
  }
}

export default connect(state => {
  return {
    customizer: state.customizer
  };
})(ToggleShadow);
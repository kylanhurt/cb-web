import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {changeBorderRadius} from '../../../redux/actions/customizerActions';

class ToggleSquared extends PureComponent {
  
  handleClick = () => {
    this.props.dispatch(changeBorderRadius());
  };
  
  render() {
    return (
      <label className='toggle-btn customizer__toggle'>
        <input className='toggle-btn__input' type='checkbox' name='square_toggle'
               checked={this.props.customizer.squaredCorners}/>
        <label className='toggle-btn__input-label' htmlFor='square_toggle'
               onClick={this.handleClick}>Toggle</label>
        <span>Squared borders</span>
      </label>
    )
  }
}

export default connect(state => {
  return {
    customizer: state.customizer
  };
})(ToggleSquared);
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {changeThemeToDark, changeThemeToLight} from '../../../redux/actions/themeActions';

class ToggleTheme extends PureComponent {
  
  handleClick = () => {
    if (this.props.theme.className === 'theme-dark')
      this.props.dispatch(changeThemeToLight());
    else
      this.props.dispatch(changeThemeToDark());
  };
  
  render() {
    return (
      <label className='toggle-btn customizer__toggle'>
        <input className='toggle-btn__input' type='checkbox' name='theme_toggle'
               checked={this.props.theme.className === 'theme-dark'}/>
        <label className='toggle-btn__input-label' htmlFor='theme_toggle'
               onClick={this.handleClick}>Toggle</label>
        <span>Dark Theme</span>
      </label>
    )
  }
}

export default connect(state => {
  return {
    theme: state.theme
  };
})(ToggleTheme);
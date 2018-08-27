import React, {PureComponent} from 'react';
import classNames from 'classnames';
import CloseIcon from 'mdi-react/CloseIcon';
import ToggleTheme from './ToggleTheme';
import ToggleCollapsedMenu from './ToggleCollapsedMenu';
import ToggleSquared from './ToggleSquared';
import ToggleShadow from './ToggleShadow';
import ToggleTopMenu from './ToggleTopMenu';

const settings = process.env.PUBLIC_URL + '/img/settings.svg';


export default class Customizer extends PureComponent {
  
  state = {
    open: false
  };
  
  handleOpen = () => {
    this.setState({open: !this.state.open})
  };
  
  render() {
    let customizerClass = classNames({
      'customizer__wrap': true,
      'customizer__wrap--open': this.state.open
    });
    
    return (
      <div className='customizer'>
        <button className='customizer__btn' onClick={this.handleOpen}>
          <img className='customizer__btn-icon' src={settings} alt='icon'/>
        </button>
        <div className={customizerClass}>
          <div className='customizer__title-wrap'>
            <h5>Theme Customizer</h5>
            <button className='customizer__close-btn' onClick={this.handleOpen}>
              <CloseIcon/>
            </button>
          </div>
          <p className='customizer__caption'>This customizer allows you to see the different variations of the EasyDev.
            Create your own visual style for every project you do!</p>
          <ToggleCollapsedMenu/>
          <ToggleTopMenu/>
          <ToggleTheme/>
          <ToggleSquared/>
          <ToggleShadow/>
        </div>
      </div>
    )
  }
}
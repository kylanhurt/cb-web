import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MainWrapper extends PureComponent {

  render() {
    let wrapperClass = classNames({
      'wrapper': true,
      'wrapper--full-width': this.props.sidebar.collapse,
      'squared-corner-theme': this.props.customizer.squaredCorners,
      'blocks-with-shadow-theme': this.props.customizer.withBoxShadow,
      'top-navigation': this.props.customizer.topNavigation
    });
    
    const theme = this.props.theme.className;
    return (
      <div className={theme}>
        <div className={wrapperClass}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    theme: state.theme,
    sidebar: state.sidebar,
    customizer: state.customizer
  }
})(MainWrapper);
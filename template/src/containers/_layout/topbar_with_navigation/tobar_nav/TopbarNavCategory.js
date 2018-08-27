import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class TopbarNavCategory extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };
  
  render() {
    return (
      <div className='topbar__category-wrap'>
        <div className='topbar__link topbar__category'>
          {this.props.icon ? <span className={`topbar__link-icon lnr lnr-${this.props.icon}`}/> : ''}
          <p className='topbar__link-title'>
            {this.props.title}
            <span className='topbar__category-icon lnr lnr-chevron-right'/>
          </p>
        </div>
        <div className='topbar__submenu'>
          {this.props.children}
        </div>
      </div>
    )
  }
}